import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextViewerComponent implements OnInit {
  @Input() value: string = '';
  html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.updateHtml(this.value);
  }

  onInput(value: string): void {
    this.updateHtml(value);
  }

  private updateHtml(value: string): void {
    this.html = this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
