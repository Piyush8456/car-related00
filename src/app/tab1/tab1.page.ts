import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarOnRentePage } from '../car-on-rente/car-on-rente.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  username: string='Piyush';
  password: string='12345';

  constructor(private navCntrl: NavController,private Router: Router) {  }

  login(){
     console.log('you logged innnnnnnn')
    if(this.username && this.password){
      this.navCntrl.navigateForward(['car-on-rente'])
    }
    else{
      alert('Please Enter Valid Email & Password')
    }
  }
  facebook(){
    this.Router.navigate([])
  }

}
