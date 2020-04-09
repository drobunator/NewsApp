import {Component, OnInit} from '@angular/core';
import {StorageService} from './shared/storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Observable<[]>;
  public langs = {
    ua: 'Українська',
    eng: 'English',
    ru: 'Русский',
  };
  public selected = 'ua';

  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
    this.storage.newsData.subscribe(resp => this.data = resp.articles);
  }

}
