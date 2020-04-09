import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'https://newsapi.org/v2';
  apiKey = environment.apiKey;
  endpoints = 'top-headlines';
  country = 'ua';
  lang = 'ua';



  constructor(private http: HttpClient) {
  }

  getNewsData() {
    return this.http.get(`${this.url}/${this.endpoints}?language=${this.lang}&country=${this.country}&apiKey=${this.apiKey}`)
  }


}
