import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  car: Car;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.carService.getById(this.route.snapshot.paramMap.get('id')).subscribe(car => {
      this.car = car;
    });
  }

  deleteCar(): void {
    this.carService.delete(this.car.id).subscribe(res => {
      this.carService.showMessage(res.message);
      this.router.navigate(['/car']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/car']);
  }

}
