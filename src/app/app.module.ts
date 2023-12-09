import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { SalesInvoiceComponent } from './Sales-Managment/sales-invoice/sales-invoice.component';
import { PaymentEditionComponent } from './Sales-Managment/payment-edition/payment-edition.component';
import { NonGSTInvoiceComponent } from './Sales-Managment/non-gst-invoice/non-gst-invoice.component';
import { NonGSTPaymentEditionComponent } from './Sales-Managment/non-gst-payment-edition/non-gst-payment-edition.component';
import { DeliveryChallanComponent } from './Sales-Managment/delivery-challan/delivery-challan.component';
import { QuotationComponent } from './Sales-Managment/quotation/quotation.component';
import { AddCityComponent } from './Sales-Managment/add-city/add-city.component';
import { AddNewDeliveryChallanComponent } from './Sales-Managment/add-new-delivery-challan/add-new-delivery-challan.component';
import { AddNewInvoiceComponent } from './Sales-Managment/add-new-invoice/add-new-invoice.component';
 
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, SalesInvoiceComponent, PaymentEditionComponent, NonGSTInvoiceComponent, NonGSTPaymentEditionComponent, DeliveryChallanComponent, QuotationComponent, AddCityComponent, AddNewDeliveryChallanComponent, AddNewInvoiceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
