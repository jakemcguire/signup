import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingAddressFormComponent } from './shipping-address-form/shipping-address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    HeaderComponent,
    FooterComponent,
    ShippingAddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
