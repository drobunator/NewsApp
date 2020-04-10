import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'https://newsapi.org/v2';
  apiKey = environment.apiKey;
  endpoints = 'top-headlines';
  country = 'ua';
  lang = 'ru';
  category = 'general';


  constructor(private http: HttpClient) {
  }

  getNewsData(country?: string, query?: string, category?: string) {
    if(query.trim()){
      return this.http.get(`${this.url}/everything?q=${query}&language=${this.lang}&pageSize=100&apiKey=${this.apiKey}`);
    }
    return this.http.get(`${this.url}/${this.endpoints}?language=${this.lang}&country=${country || this.country}&category=${category || this.category}&pageSize=100&apiKey=${this.apiKey}`);
  }


  getTopHeadlines() {
    return this.http.get(`${this.url}/${this.endpoints}?language=${this.lang}&country=${this.country}&apiKey=${this.apiKey}`);
  }

}
