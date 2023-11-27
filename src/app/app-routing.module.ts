import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { CarOnRentePage } from './car-on-rente/car-on-rente.page';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'car-on-rente',
    loadChildren: () => import('./car-on-rente/car-on-rente.module').then( m => m.CarOnRentePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules },
      

      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
