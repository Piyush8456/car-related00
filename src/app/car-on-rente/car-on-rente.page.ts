import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-on-rente',
  templateUrl: './car-on-rente.page.html',
  styleUrls: ['./car-on-rente.page.scss'],
})
export class CarOnRentePage  {

  constructor(private router : Router ) { }

  backtoHome(){
    this.router.navigate(['/'])
  }

}
