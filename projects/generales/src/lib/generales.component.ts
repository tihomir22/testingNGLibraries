import { Component, OnInit } from "@angular/core";

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: "lib-generales",
  template: `
    <p-table [value]="cars">
      <ng-template pTemplate="header">
        <tr>
          <th>Vin</th>
          <th>Year</th>
          <th>Brand</th>
          <th>Color</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-car>
        <tr>
          <td>{{ car.vin }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.brand }}</td>
          <td>{{ car.color }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: []
})
export class GeneralesComponent implements OnInit {
  cars: Car[] = [];

  constructor() {
    this.generarCoches(1000);
  }

  ngOnInit() {}

  private generarCoches(numero: number) {
    for (let i = 0; i < numero; i++) {
      this.cars.push({
        vin: "vin" + Math.random() * 10000,
        year: "year" + Math.random() * 10000,
        brand: "BRAND" + Math.random() * 10000,
        color: "color" + Math.random() * 10000
      });
    }
  }
}
