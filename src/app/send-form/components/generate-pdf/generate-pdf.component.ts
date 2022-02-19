import { Component, OnInit, Input } from '@angular/core';

import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.sass']
})
export class GeneratePdfComponent implements OnInit {
  @Input('form') public form: any;
  constructor() { }

  ngOnInit(): void {
  }
  generatePdf(type: string): void {
    const value = this.form
    const date = format(value.date, "dd 'de' MMMM 'de' yyyy ", {locale: es})
    const pdf = {
      content: [
        {
          text: `${date}`,
          margin: [0, 20],
        },
        {
          text: `Apreciado cliente ${value.name} indicado con Nit ${value.nit}, 
          indicamos que el deposito se realizara al siguiente numero de cuenta ${value.bank}`
        },
        {
          text: 'Gracias',
          margin: [0, 20],
        }
      ]
    }
    const pdfGenerate = pdfMake.createPdf(pdf);
    switch (type) {
      case 'open':
        pdfGenerate.open();
        break;
      case 'download':
        pdfGenerate.download();
        break;
      default: 'open'
        break;
    }
  }

}
