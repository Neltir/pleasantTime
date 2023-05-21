import { Component } from '@angular/core';

@Component({
  selector: 'app-outsider',
  templateUrl: './outsider.component.html',
  styleUrls: ['./outsider.component.css']
})
export class OutsiderComponent {
  title: string = "Pleasant Time";

  viewPresentation: boolean = true;
  viewContact: boolean = false;
  viewLegalNotice: boolean = false;
  viewUserConnection: boolean = false;

  constructor() {}

  displayPresentation(): void {
    this.viewPresentation = true;
    this.viewContact = false;
    this.viewLegalNotice = false;
    this.viewUserConnection = false;
  }

  displayContact(): void {
    this.viewPresentation = false;
    this.viewContact = true;
    this.viewLegalNotice = false;
    this.viewUserConnection = false;
  }

  displayLegalNotice(): void {
    this.viewPresentation = false;
    this.viewContact = false;
    this.viewLegalNotice = true;
    this.viewUserConnection = false;
  }
  displayUserConnection(): void {
    this.viewPresentation = false;
    this.viewContact = false;
    this.viewLegalNotice = false;
    this.viewUserConnection = true;
  }
}
