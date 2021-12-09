import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-weather-api';
  city!: any;
  show!: any;
constructor (private ws: WeatherService){
}
ngOninit(){

}

loadweather(){
  this.ws.getCurrentWeather(this.city).subscribe(

    res =>{
      this.show = res
      console.log(res);
      // console.log(this.city)
      this.city = "";
      // var iconcode = this.show.eather[0].icon;

    }
  )}
}
