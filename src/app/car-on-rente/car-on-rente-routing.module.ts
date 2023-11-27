import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarOnRentePage } from './car-on-rente.page';

const routes: Routes = [
  {
    path: '',
    component: CarOnRentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOnRentePageRoutingModule {}
