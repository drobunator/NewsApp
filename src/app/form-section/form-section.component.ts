import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  selectedCountry = 'ua';
  selectedCategory = 'general';
  constructor() { }

  ngOnInit(): void {
  }

}
