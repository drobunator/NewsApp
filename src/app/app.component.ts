import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public langs = {
    ua: 'Українська',
    eng: 'English',
    ru: 'Русский',
  };
  public selected = 'ua'

  constructor() {
  }
  ngOnInit(): void {
  }

}
