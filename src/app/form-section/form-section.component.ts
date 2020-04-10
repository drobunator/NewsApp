import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../shared/api-service.service";
import {StorageService} from "../shared/storage.service";

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  selectedCountry = 'ua';
  selectedCategory = 'general';
  searchValue = '';


  constructor(private api: ApiServiceService, private storage: StorageService) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.api.getNewsData(this.selectedCountry,this.searchValue ,this.selectedCategory)
      .subscribe(resp  => {
      this.storage.setDataValue(resp)
    })
  }

}


