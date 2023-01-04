import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AQMSComponent } from './aqms/aqms.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HeaderComponent } from './header/header.component';
import { StarterpageComponent } from './starterpage/starterpage.component';

const routes: Routes = [
    { path: '', component: HeaderComponent},
    { path: 'login', component: HeaderComponent},
    { path: 'data/:name', component: AQMSComponent},
    { path: '**', component: ErrorpageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

