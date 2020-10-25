import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.model';

interface Response {
  message: string;
}

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Omit<Car, 'id'> = {
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: '',
  }

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {

  }

  createCar(): void {
    this.carService.create(this.car).subscribe((res: Response) => {
      this.carService.showMessage(res.message);
      this.router.navigate(['/car']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/car']);
  }
}
