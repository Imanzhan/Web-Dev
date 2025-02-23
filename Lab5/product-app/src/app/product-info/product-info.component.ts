import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productinfo } from '../productinfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="productInfo.photo"
        alt="Photo of product {{ productInfo.name }}"
      />
      <h2 class="listing-heading">{{ productInfo.name }}</h2>
      <p class="listing-info">
        Rating: {{ productInfo.rating }}★
      </p>
      <a [routerLink]="['/details', productInfo.id]">More</a>
      <a [href]="productInfo.link">{{ productInfo.linkText }}</a>
      <div>
    <button (click)="shareToTelegram(productInfo.link)">Share to Telegram</button>
    <button (click)="shareToWhatsApp(productInfo.link)">Share to WhatsApp</button>
  </div>
    </section>
  `,
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  @Input() productInfo!: Productinfo;

  shareToTelegram(link: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }

  shareToWhatsApp(link: string) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, '_blank');
  }
}
