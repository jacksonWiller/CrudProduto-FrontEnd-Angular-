import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalheComponent } from './components/produtos/produto-detalhe/produto-detalhe.component';

import { TituloComponent } from './shared/titulo/titulo.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { NavComponent } from './components/nav/nav.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { ProdutoAddComponent } from './components/produtos/produto-add/produto-add.component';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';



@NgModule({
  declarations: [	
    AppComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    SidebarComponent,
    NavComponent,
    TituloComponent,
    ProdutoAddComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
