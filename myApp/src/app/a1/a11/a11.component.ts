import { Component, OnInit } from '@angular/core';
import { SAService } from '../s-a.service';

@Component({
  selector: 'app-a11',
  templateUrl: './a11.component.html',
  styleUrls: ['./a11.component.css'],
  providers: [SAService]
})
export class A11Component implements OnInit {

  constructor(private sa: SAService) {
    this.items = sa.items;
  }

  public items: string[];

  ngOnInit() {
  }

}
