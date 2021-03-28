import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './pages/login/login.page';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token/token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [LoginPage, LoginInputComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    TranslateModule.forChild({extend: true})
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class LoginModule { }
