import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ToastrModule} from 'ngx-toastr';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule} from 'primeng/speeddial';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { TestingInterceptor } from './testing.interceptor';
import { AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule} from 'primeng/avatargroup';
import { SubjectsDashboardComponent } from './subjects-dashboard/subjects-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardPageComponent,
    SubjectsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ButtonModule,
    SpeedDialModule,
    StyleClassModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
  
  ],
  providers: [AuthenticationService,{
    provide : HTTP_INTERCEPTORS,
    useClass:TestingInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
