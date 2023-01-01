import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './componentes/iniciarsesion/iniciarsesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'iniciarsesion', component: IniciarsesionComponent},
  {path: '', redirectTo: 'iniciarsesion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
