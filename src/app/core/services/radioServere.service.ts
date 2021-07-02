import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseRadioServer } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class RadioServereService {
  serverUrl: string;
  constructor(private http: HttpClient) {
    this.serverUrl = 'https://teclead.de/recruiting/radios';
  }

  getAllRadios(): Observable<IResponseRadioServer> {
    return this.http.get<IResponseRadioServer>(this.serverUrl);
  }
}
