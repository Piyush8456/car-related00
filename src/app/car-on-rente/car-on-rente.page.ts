import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-car-on-rente',
  templateUrl: './car-on-rente.page.html',
  styleUrls: ['./car-on-rente.page.scss'],
})
export class CarOnRentePage  {
  dateExample = new Date().toISOString();
  endDete = new Date().toDateString();

  constructor(private router : Router ) { }

  backtoHome(){
    this.router.navigate(['/'])
  }
}
