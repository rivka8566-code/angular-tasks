import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {
  form = new FormGroup({
    name: new FormControl('Example name', [Validators.required, Validators.maxLength(18)]),
    email: new FormControl('example@gmail.com', [Validators.required, Validators.email]),
    subject: new FormControl('',[Validators.maxLength(50)]),
    message: new FormControl('')
  });

  
  @Output() cancel = new EventEmitter<void>()
  @Output() send = new EventEmitter<void>()

  get name(){
    return this.form.controls['name'];
  }

  get email(){
    return this.form.controls['email'];
  }

  get subject(){
    return this.form.controls['subject'];
  }

  submit(){
    console.log("Submit contact us form");
    console.log(this.form.value);
    this.send.emit();
  }

  Cancel(){
    console.log("Cancel contact us");
    this.cancel.emit();
  }
}
