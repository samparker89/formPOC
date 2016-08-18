import { Component, OnInit } from '@angular/core';

import { FormService } from './form.service';

import { FormEntry } from './formentry';

@Component({
  selector: 'form-list',
  templateUrl: 'app/form-list.component.html',
  providers: [FormService]
})

export class FormListComponent implements OnInit{

  errorMessage: string;
  formentries: FormEntry[];

  constructor(private formService: FormService){}

  ngOnInit(){
    this.formService.getFormEntries()
                     .subscribe(
                       formentries => this.formentries = formentries,
                       error =>  this.errorMessage = <any>error);
  }

}
