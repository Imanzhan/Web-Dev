import { Injectable } from '@angular/core';
import { Productinfo } from './productinfo';

@Injectable({
  providedIn: 'root',
})
export class DetailingService {
  url = 'http://localhost:3000/products';
 
  constructor() {}

  async getAllProductInfo(): Promise<Productinfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getProductInfoById(id: number): Promise<Productinfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
