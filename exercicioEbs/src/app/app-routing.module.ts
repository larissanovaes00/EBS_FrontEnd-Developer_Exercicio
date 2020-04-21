import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-campaign', component: NewCampaignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

