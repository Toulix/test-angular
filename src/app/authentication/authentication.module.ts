import { AuthenticationComponent } from './authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
