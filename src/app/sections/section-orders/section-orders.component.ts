import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/orders';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: "Shiva Sharma",
        state: "MD", email: "shiva@shiva.com"
      },
      total: 240,
      placed: new Date(2019, 2, 2),
      fulfilled: new Date(2019, 2, 4),
      status: 'Completed'
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: "John Doe",
        state: "MD",
        email: "jdoe@shiva.com"
      },
      total: 500,
      placed: new Date(2019, 2, 2),
      fulfilled: new Date(2019, 2, 4),
      status: 'Completed'

    }

  ]

  ngOnInit() {
  }

}
