import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  visible = false;

  ngOnInit(): void {
    this.buildForm();
  }

  onToggleVisibility(): void {
    this.visible = !this.visible;
  }

  get type(): string {
    return this.visible ? 'text' : 'password';
  }

  get icon(): any {
    return {
      'fa-eye': !this.visible,
      'fa-eye-slash': this.visible,
    };
  }

  get invalid(): boolean {
    const field = this.form.get('password') as AbstractControl;
    return (field.touched || field.dirty) && field.invalid;
  }

  get password(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  get status(): number {
    const password = this.password;
    let status = 100;

    Object.keys(password.errors || 0).forEach(() => status -= 25);

    if (!password.value.length) {
      status = 0;
    } else {
      status += 1;
    }

    return status > 100 ? 100 : status;
  }

  private buildForm(): void {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        CustomValidators.oneCapitalLetterOrMore,
        CustomValidators.oneNumberOrMore,
        CustomValidators.oneSpecialCharacterOrMore,
      ]),
    });
  }
}
