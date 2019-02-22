import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class NewsResolver implements Resolve<any> {

  constructor(private http: HttpClient) { }

  public news: any = undefined;

  resolve(): Observable<any> {
    if (this.news) {
      return this.getSavedNews();
    } else {
      return this.getNewsFromApi();
    }
  }

  private getSavedNews(): any {
    console.log('Getting saved news');
    return of(this.news);
  }

  private getNewsFromApi(): any {
    const newsUrl = 'https://httpbin.org/post';
    const news = 'The sky is blue'; // Mock data to be returned by test API

    console.log('Getting news from API');
    return this.http.post(newsUrl, news).pipe(
      tap( (dataFromApi) => this.news = dataFromApi),
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}
