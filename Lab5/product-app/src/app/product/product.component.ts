import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { Productinfo } from '../productinfo';
import { DetailingService } from '../detailing.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductInfoComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by product" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-product-info
        *ngFor="let productInfo of filteredInfoList" [productInfo]="productInfo">
      </app-product-info>
    </section>
  `,
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productInfoList: Productinfo[] = [];
  detailingService: DetailingService = inject(DetailingService);
  filteredInfoList: Productinfo[] = [];

constructor() {
  this.detailingService.getAllProductInfo().then((productInfoList: Productinfo[]) => {
    this.productInfoList = productInfoList;
    this.filteredInfoList = this.productInfoList;
  }
)}

filterResults(text: string) {
  if (!text) { this.filteredInfoList = this.productInfoList;

    this.filteredInfoList = this.productInfoList.filter(
      Productinfo => Productinfo?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
}


