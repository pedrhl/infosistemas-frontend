import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Car } from './car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Response {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:3333/';

  constructor(private snackar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string) :void {
    this.snackar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(car: Omit<Car, 'id'>): Observable<Response>{
    return this.httpClient.post<Response>(this.baseUrl, car);
  }

  getCars(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl + 'cars');
  }

  getById(id: string): Observable<Car> {
    return this.httpClient.get<Car>(this.baseUrl + id);
  }

  update(car: Car): Observable<Response> {
    return this.httpClient.put<Response>(this.baseUrl + car.id, car);
  }

  delete(id: string): Observable<Response> {
    return this.httpClient.delete<Response>(this.baseUrl + id);
  }
}
