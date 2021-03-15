import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.formSubmit.emit({ values: this.form.value, form: this.form });
  }

  isInvalid(control: string): boolean {
    const field = this.form.get(control) as AbstractControl;
    return field.touched && field.invalid;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }
}
