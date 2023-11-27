import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarOnRentePageRoutingModule } from './car-on-rente-routing.module';

import { CarOnRentePage } from './car-on-rente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarOnRentePageRoutingModule
  ],
  declarations: [CarOnRentePage]
})
export class CarOnRentePageModule {}
