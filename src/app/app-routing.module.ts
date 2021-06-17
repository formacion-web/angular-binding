import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';
import { BindingModule } from './binding/binding.module';

const loadBindingModule = async ()=> {const m = await import('./binding/binding.module'); return m.BindingModule}

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'interpolacion',component:InterpolacionComponent},
  {path:'binding', loadChildren: loadBindingModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
