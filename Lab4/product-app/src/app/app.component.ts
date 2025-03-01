import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule],
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="assets/images/Products/logo.jpg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <router-outlet> </router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-app';
}
