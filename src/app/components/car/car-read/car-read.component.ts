import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  cars: Car[];
  displayedColumns = ['id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'action'];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(res => {
      this.cars = res;
      console.log(res);
    });
  }

}
