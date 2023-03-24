import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './Binding_Pages/data-binding/data-binding.component';
import { NavComponent } from './common-components/nav/nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxBoostrapComponent } from './ngx-boostrap/ngx-boostrap.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NavComponent,
    HeaderComponent,
    NgxBoostrapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
