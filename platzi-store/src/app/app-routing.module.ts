import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SelectivePreloadService } from './core/services/selective-preload/selective-preload.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
        data: { preload: true }
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./components/product/product.module').then(m => m.ProductModule),
        data: { preload: true }
      },
      {
        path: 'contact',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./components/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
