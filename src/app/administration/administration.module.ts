import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { AdministrationRoutingModule } from './administration-routing.module';

import { AdministrationComponent } from './administration.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    HomeComponent,
    HeaderComponent,
    TeamsComponent,
  ],
  imports: [CommonModule, AdministrationRoutingModule, NgZorroAntdModule],
})
export class AdministrationModule {}
