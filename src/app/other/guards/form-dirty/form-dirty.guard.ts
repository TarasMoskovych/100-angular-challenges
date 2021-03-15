import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

interface IFormComponent {
  formComponent: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<IFormComponent> {
  canDeactivate(component: IFormComponent): boolean {
    if (component.formComponent.form.dirty) {
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}
