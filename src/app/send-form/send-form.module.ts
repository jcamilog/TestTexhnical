import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';

import { SendFormRoutingModule } from './send-form-routing.module';
import { FormComponent } from './components/form/form.component';
import { ContentFormComponent } from './components/content-form/content-form.component';
import { GeneratePdfComponent } from './components/generate-pdf/generate-pdf.component';


@NgModule({
  declarations: [
    FormComponent,
    ContentFormComponent,
    GeneratePdfComponent
  ],
  imports: [
    CommonModule,
    SendFormRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SendFormModule { }
