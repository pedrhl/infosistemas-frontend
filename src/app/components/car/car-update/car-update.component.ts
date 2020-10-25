import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car: Car;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carService.getById(this.route.snapshot.paramMap.get('id')).subscribe(car => {
      this.car = car;
    })
  }

  updateCar(): void {
    this.carService.update(this.car).subscribe(res => {
      this.carService.showMessage(res.message);
      this.router.navigate(['/car']);
    });
  }

  cancelar():void {
    this.router.navigate(['/car']);
  }

}
