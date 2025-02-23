import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [];
const routeConfig: Routes = [
  {
    path: '',
    component: ProductComponent,
    title: 'Product Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page',
  },
];
export default routeConfig;