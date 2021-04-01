import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Inject, Injectable, Injector } from '@angular/core';
import { delay, take } from 'rxjs/operators';

import { SnackbarComponent } from 'src/app/shared/components';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private wrapperSelector = 'snackbar-wrapper';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) { }

  show(message: string = 'Default message', autoclose = true, ms = 3000): SnackbarComponent {
    return this.appendComponent(message, autoclose, ms);
  }

  private appendComponent(message: string, autoclose: boolean, ms: number): SnackbarComponent {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(SnackbarComponent)
      .create(this.injector);

    const { instance } = componentRef;

    // Set inputs
    instance.message = message;
    instance.ms = ms;
    instance.autoclose = autoclose;

    // 2. Attach incoming component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the container
    this.getContainer().append(domElem);

    // 5. Destroy after fade out
    instance.afterClosed
      .pipe(
        take(1),
        delay(250),
      )
      .subscribe(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      });

    return instance;
  }

  private getContainer(): HTMLElement {
    let container: HTMLElement = this.document.querySelector(`.${this.wrapperSelector}`) as HTMLElement;

    if (!container) {
      container = this.document.createElement('div');
      container.setAttribute('class', this.wrapperSelector);
      this.document.body.appendChild(container);
    }

    return container;
  }
}
