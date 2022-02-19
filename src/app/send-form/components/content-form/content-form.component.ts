import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.sass']
})
export class ContentFormComponent implements OnInit {
  form
  public generatePdf = false;
  constructor() { }

  ngOnInit(): void {
  }
  receivedForm(event) {
    this.form = event;
    this.generatePdf = true;
  }
}
