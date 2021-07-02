import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RadioServereService {
  serverUrl: string;
  constructor(private http: HttpClient) {
    this.serverUrl = 'https://teclead.de/recruiting/radios';
  }

  getAllRadios(): any {
    return this.http.get<any>(this.serverUrl);
  }
}
