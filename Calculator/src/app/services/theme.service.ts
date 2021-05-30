import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private httpClient: HttpClient) {}

  getTheme(number: string): Observable<any> {
    return this.httpClient.get(`themes/theme${number}.json`);
  }
}
