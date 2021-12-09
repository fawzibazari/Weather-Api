import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

environment
export class Weather {
  city!: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = environment.api;
  URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {}


   getCurrentWeather(city: string) : Observable<any> {
    return this.http.get(this.URL + city + '&APPID=' + this.APIkey);
  }

}
