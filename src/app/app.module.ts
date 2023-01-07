import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { CustomdirectiveDirective } from './customdirective.directive';
import { AnotherdirectiveDirective } from './hoverhighliter.directive';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AQMSComponent } from './aqms/aqms.component';
import { AppRoutingModule } from './app-routing.module';
import { StarterpageComponent } from './starterpage/starterpage.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginpageComponent,
    CustomdirectiveDirective,
    AnotherdirectiveDirective,
    ErrorpageComponent,
    AQMSComponent,
    StarterpageComponent,
    TopComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
