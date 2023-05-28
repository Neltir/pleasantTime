import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { OutsiderComponent } from './outsider/outsider.component';
import { OutsiderPresentationComponent } from './outsider-presentation/outsider-presentation.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { UserConnectionComponent } from './user-connection/user-connection.component';


@NgModule({
  declarations: [
    AppComponent,
    OutsiderComponent,
    OutsiderPresentationComponent,
    ContactComponent,
    LegalNoticeComponent,
    UserConnectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
