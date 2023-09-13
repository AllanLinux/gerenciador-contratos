import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddContratoComponent } from './add-contrato/add-contrato.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ItemListComponent },
  { path: 'add-contrato', component: AddContratoComponent },
  { path: 'add-contrato/:id', component: AddContratoComponent }, // Rota com parâmetro
  {
    path: 'sobre',
    component: SobreComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
