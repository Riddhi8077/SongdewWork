import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  private apiUrl = "https://script.google.com/macros/s/AKfycbwEbNC73P8ftODwaqU4qt1yEqVnADVAu2NUo7tz2O4r4cnH-KupRO9tfgcd45GTkHnpuQ/exec";

  constructor(private http: HttpClient) {}

  saveData(data:any){

    return this.http.post(this.apiUrl, data);

  }

}