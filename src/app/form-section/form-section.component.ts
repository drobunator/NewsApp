import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  selectedCountry = 'ua'
  constructor() { }

  ngOnInit(): void {
  }

}
