import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ContactComponent } from './contact/contact.component';
import { UserConnectionComponent } from './user-connection/user-connection.component';
import { OutsiderPresentationComponent } from './outsider-presentation/outsider-presentation.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: '', component: OutsiderPresentationComponent},
  { path: 'mentions-legales', component: LegalNoticeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'connexion', component: UserConnectionComponent},
  { path: 'inscription', component: UserRegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
