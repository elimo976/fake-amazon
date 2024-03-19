import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';
import { ProdottiCategoriaComponent } from './components/prodotti-categoria/prodotti-categoria.component';

const routes: Routes = [
  {path: "", component: ProdottiVetrinaComponent},
  { path: "contatti", component: ContattiComponent },
  { path: "preview", component: ProdottoPreviewComponent },
  { path: "prodotto/:id", component: ProdottoDetailComponent },
  {path:"prodotti/categoria/:cat", component:ProdottiCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
