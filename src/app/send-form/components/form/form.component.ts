import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SendFormService } from '../../../services/core/send-form/send-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() formSend: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sForm: SendFormService
  ) { 
    this.buildForm();
  }
  

  ngOnInit(): void {
  }
  sendForm(): void {
    const value = this.form.value
    value.date = new Date();
    if(this.form.valid) {
      this.sForm.sendForm(value)
      .subscribe(data => {
        console.log(data); 
        this.formSend.emit(value)
      }, err => {
        console.log(err);
      })
      setTimeout(() => {
        this.formSend.emit(value)
      }, 1000);
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      nit: ['', [Validators.required]],
      bank: ['', [Validators.required]],
    });
  }

}
