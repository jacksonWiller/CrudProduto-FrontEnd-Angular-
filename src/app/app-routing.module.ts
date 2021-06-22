import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAddComponent } from './components/produtos/produto-add/produto-add.component';
import { ProdutoDetalheComponent } from './components/produtos/produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent,
    children:[
      {path: 'detalhe/:id', component: ProdutoDetalheComponent},
      {path: 'detalhe', component: ProdutoDetalheComponent},
      {path: 'add', component: ProdutoAddComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
