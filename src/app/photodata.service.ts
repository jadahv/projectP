import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotodataService {

  constructor(private _http:HttpClient) { }

  getdata()
  {
  //console.log('check call my API here')
   return this._http.get('assets/data.json')
   

  }
  
}
