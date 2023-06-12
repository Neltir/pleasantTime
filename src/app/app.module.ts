import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';

import { AppComponent } from './app.component';
import { LayoutComponent } from './views/layout/layout.component';
import { OutsiderPresentationComponent } from './views/outsider-presentation/outsider-presentation.component';
import { ContactComponent } from './views/contact/contact.component';
import { LegalNoticeComponent } from './views/legal-notice/legal-notice.component';
import { UserConnectionComponent } from './views/user-connection/user-connection.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/dashboard/profile/profile.component';
import { GroupsComponent } from './views/dashboard/groups/groups.component';
import { MailboxComponent } from './views/dashboard/mailbox/mailbox.component';
import { SearchComponent } from './views/dashboard/search/search.component';
import { ActivitiesComponent } from './views/dashboard/activities/activities.component';
import { SubmitActivityComponent } from './views/dashboard/activities/submit-activity/submit-activity.component';
import { BrowseActivityComponent } from './views/dashboard/activities/browse-activity/browse-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OutsiderPresentationComponent,
    ContactComponent,
    LegalNoticeComponent,
    UserConnectionComponent,
    UserRegisterComponent,
    DashboardComponent,
    ProfileComponent,
    GroupsComponent,
    MailboxComponent,
    SearchComponent,
    ActivitiesComponent,
    SubmitActivityComponent,
    BrowseActivityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule,
    TooltipModule,
    MessagesModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
