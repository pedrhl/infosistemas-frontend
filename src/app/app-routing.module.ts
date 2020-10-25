import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CarCrudComponent } from './views/car-crud/car-crud.component';
import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "car",
    component: CarCrudComponent
  },
  {
    path: "car/create",
    component: CarCreateComponent,
  },
  {
    path: "car/update/:id",
    component: CarUpdateComponent,
  },
  {
    path: "car/delete/:id",
    component: CarDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
