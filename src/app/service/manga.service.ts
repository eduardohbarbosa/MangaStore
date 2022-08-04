import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '../model/manga';



@Injectable({
  providedIn: 'root'
})
export class MangaService {
  apiUrl = "https://sheet.best/api/sheets/2fd84a0a-6c4c-4ceb-9502-bd793a53cac6";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getManga():Observable<Manga[]>{
    return this.httpClient.get<Manga[]>(this.apiUrl);
  }
}
