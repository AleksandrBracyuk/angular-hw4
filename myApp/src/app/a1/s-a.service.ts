import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SAService {

  constructor() {

    this._items = ['red', 'green', 'blue'];
  }

  private _items: string[];

  get items() {
    return this._items;
  }
}
