import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = "Pleasant Time";
  cars: Car[] = [];
  car: Car = {model:'', price:0};
  error: any;
  success = '';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  ngOnDestroy() {
    this.carService.getAll().unsubscribe;
  }

  // récupère les cars
  getCars() {
    this.carService.getAll().subscribe(
      (response: any) => {
        this.cars = response.data;
        this.success = 'successful retrieval of the list';
      },
      (err: string) => {
        console.log(err);
        this.error = err;
      }
    );
  }

  addCar2(f: NgForm) {
    this.resetAlerts();
    this.carService.store(this.car).subscribe(
      (res: Car) => {
        //update la liste
        this.cars.push(res);
        //préviens user
        this.success = 'Created successfully';
        // vide le form
        f.reset();
      },        
      (err) => (this.error = err.message)
    );
  }

  addCar(f: NgForm) {
    this.resetAlerts();
    this.carService.store(this.car).subscribe({
      next: (res: Car) => this.cars.push(res),
      error: (err) => this.error = err.message
    });
    if(this.error != '') {
      this.success = 'Created Successfully';
      f.reset();
    }
  }

  resetAlerts() {
    this.error = '';
    this.success = '';
  }

}
