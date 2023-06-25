import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LegalNoticeComponent } from './views/legal-notice/legal-notice.component';
import { ContactComponent } from './views/contact/contact.component';
import { UserConnectionComponent } from './views/user-connection/user-connection.component';
import { OutsiderPresentationComponent } from './views/outsider-presentation/outsider-presentation.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ActivitiesComponent } from './views/dashboard/activities/activities.component';
import { ProfileComponent } from './views/dashboard/profile/profile.component';
import { GroupsComponent } from './views/dashboard/groups/groups.component';
import { MailboxComponent } from './views/dashboard/mailbox/mailbox.component';
import { SearchComponent } from './views/dashboard/search/search.component';
import { LayoutComponent } from './views/layout/layout.component';
import { SubmitActivityComponent } from './views/dashboard/activities/submit-activity/submit-activity.component';
import { BrowseActivityComponent } from './views/dashboard/activities/browse-activity/browse-activity.component';
import { AdminComponent } from './views/dashboard/admin/admin.component';

const routes: Routes = [
  { path: '', component: OutsiderPresentationComponent},
  { path: 'mentions-legales', component: LegalNoticeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'connexion', component: UserConnectionComponent},
  { path: 'inscription', component: UserRegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard], children: [
    { path: '', component: ActivitiesComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'profil', component: ProfileComponent},
    { path: 'activites/:choice', component: ActivitiesComponent},
    { path: 'groupes', component: GroupsComponent},
    { path: 'messagerie', component: MailboxComponent},
    { path: 'recherche', component: SearchComponent}
  ]},
  { path: '**', component: OutsiderPresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
