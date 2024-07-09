import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl= 'https://apimanager-lucasfariapp.wiremockapi.cloud/v1/profile';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.dataUrl}`);
  }
}
