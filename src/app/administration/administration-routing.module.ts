import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { MissionsComponent } from './components/missions/missions.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamdetailsComponent } from './components/TeamDetails/teamdetails.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'teams/:id',
        component: TeamdetailsComponent,
      },
      {
        path: 'missions',
        component: MissionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
