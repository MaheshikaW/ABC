import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';

const appRoutes:Routes = [ 
  {path:'',component:FormComponent},
  
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    StudentdetailsComponent,
    
    
      
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
