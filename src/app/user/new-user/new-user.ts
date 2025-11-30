import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, AbstractControl, Validators, FormArray } from '@angular/forms';

function passwordsMatch(group: AbstractControl) {
  const p = group.get('password')?.value;
  const c = group.get('confirmPassword')?.value;
  return p == c ? null : { misMatch: true }
}

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {

  categories = ['work', 'personal', 'urgent'];

  form = new FormGroup({
    name: new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      LastName: new FormControl('', [Validators.required, Validators.maxLength(18)])
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    },
      { validators: passwordsMatch }),
    categories: new FormArray(
      this.categories.map(() => new FormControl(false))
    )
  });

  get FirstName(): FormControl {
    return this.form.controls.name.controls.FirstName;
  }

  get LastName(): FormControl {
    return this.form.controls.name.controls.LastName;
  }

  get email(): FormControl {
    return this.form.controls.email;
  }

  get password(): FormControl {
    return this.form.controls.passwords.controls.password;
  }

  get confirmPassword(): FormControl {
    return this.form.controls.passwords.controls.confirmPassword;
  }

  

  get firstNameInvalid():boolean {
    return this.form.controls.name.controls.FirstName.invalid && this.form.controls.name.controls.FirstName.touched
  }

  get lastNameInvalid():boolean {
    return this.form.controls.name.controls.LastName.invalid && this.form.controls.name.controls.LastName.touched
  }

  get emailInvalid():boolean {
    return this.form.controls.email.invalid && this.form.controls.email.touched
  }

  get passwordInvalid():boolean {
    return this.form.controls.passwords.controls.password.invalid && this.form.controls.passwords.controls.password.touched
  }

  get confirmPasswordInvalid() {
    return this.form.controls.passwords.controls.confirmPassword.invalid && this.form.controls.passwords.controls.confirmPassword.touched
  }

  get matchPasswordsInvalid():boolean {
    return this.form.controls.passwords.hasError('misMatch') && this.form.controls.passwords.touched
  }




  @Output() cancel = new EventEmitter<void>()
  @Output() send = new EventEmitter<any>()



  submit() {
    console.log("Submit contact us form");
    if (this.form.valid) {
      console.log(this.form.value);
      this.send.emit(this.form.value);
    }
    else {
      this.form.markAllAsTouched();
    }
    this.form.reset()
  }

  Cancel() {
    console.log("Cancel contact us");
    this.cancel.emit();
  }
}
