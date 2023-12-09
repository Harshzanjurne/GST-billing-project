import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { SalesInvoiceComponent } from './Sales-Managment/sales-invoice/sales-invoice.component';
import { PaymentEditionComponent } from './Sales-Managment/payment-edition/payment-edition.component';
import { NonGSTInvoiceComponent } from './Sales-Managment/non-gst-invoice/non-gst-invoice.component';
import { NonGSTPaymentEditionComponent } from './Sales-Managment/non-gst-payment-edition/non-gst-payment-edition.component';
import { DeliveryChallanComponent } from './Sales-Managment/delivery-challan/delivery-challan.component';
import { QuotationComponent } from './Sales-Managment/quotation/quotation.component';
import { AddCityComponent } from './Sales-Managment/add-city/add-city.component';
import { AddNewDeliveryChallanComponent } from './Sales-Managment/add-new-delivery-challan/add-new-delivery-challan.component';
import { AddNewInvoiceComponent } from './Sales-Managment/add-new-invoice/add-new-invoice.component';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
 
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'                                                          
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path :'sales-managment/sales-invoice',
        component : SalesInvoiceComponent,
      }, 
      {
        path :'sales-managment/payment-edition',
        component :  PaymentEditionComponent,
      }, 
      {
        path :'sales-managment/non-gst-invoice',
        component :  NonGSTInvoiceComponent,
      }, 
      {
        path :'sales-managment/non-gst-payment-edition',
        component :NonGSTPaymentEditionComponent,
      }, 
      {
        path :'sales-managment/delivery-challan',
        component :DeliveryChallanComponent,
      }, 
      {
        path :'sales-managment/quotation',
        component :QuotationComponent,
      },
       
      {
        path :'sales-managment/add-city',
        component :AddCityComponent,
      },
      { 
        path:'sales-managment/add-new-delivery-challan',
        component: AddNewDeliveryChallanComponent,

      },
      {
          path: 'sales-managment/add-new-invoice',
          component: AddNewInvoiceComponent,
      },
       
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
