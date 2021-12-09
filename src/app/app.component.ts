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
  affiche!: any;

constructor (private ws: WeatherService){
}
ngOninit(){

}

loadweather(){
  this.ws.getCurrentWeather(this.city).subscribe(

    res =>{
      this.affiche = res.city
      // let test = res.city

      console.log(this.affiche);
      console.log(this.affiche.name)
      this.city = "";
    }

  )
}
}
