import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetailingService } from '../detailing.service';
import { Productinfo } from '../productinfo';
import { constants } from 'buffer';

@Component({
  selector: 'app-details',
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ productInfo?.name }}</h2>
        <img class="listing-photo" [src]="productInfo?.photo" />
        <img
          class="additional-photo"
          [src]="productInfo?.photo1"
          alt="Additional photo 1"
        />
        <img
          class="additional-photo"
          [src]="productInfo?.photo2"
          alt="Additional photo 2"
        />
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this Product</h2>
        <ul class="features-list">
          <li>Cost: {{ productInfo?.cost }} Tenge</li>
          <li>Description of the product: {{ productInfo?.description }}</li>
        </ul>
        <a [href]="productInfo?.link">{{ productInfo?.linkText }}</a>
      </section>
      <!-- <section class="share-buttons">
        <button (click)="shareToTelegram()">Share to Telegram</button>
        <button (click)="shareToWhatsApp()">Share to WhatsApp</button>
      </section> -->
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  detailingService = inject(DetailingService);
  productInfo: Productinfo | undefined;
  productInfoId = 0;

  // constructor() {
  //   const productInfoId = Number(this.route.snapshot.params['id']);
  //   this.productInfo = this.detailingService.getProductInfoById(productInfoId);
  // }

  constructor() {
    const productInfoId = Number(this.route.snapshot.params['id']);
      this.detailingService.getProductInfoById(productInfoId).then(productInfo => {
        this.productInfo = productInfo;
    });

  // shareToTelegram() {
  //   const url = `https://t.me/share/url?url=${encodeURIComponent(
  //     window.location.href
  //   )}&text=${encodeURIComponent(this.productInfo?.name || '')}`;
  //   window.open(url, '_blank');
  // }

  // shareToWhatsApp() {
  //   const url = `https://wa.me/?text=${encodeURIComponent(
  //     window.location.href + ' ' + (this.productInfo?.name || '')
  //   )}`;
  //   window.open(url, '_blank');
  // }
}
}
