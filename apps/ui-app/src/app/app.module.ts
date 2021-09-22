import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonComponentsModule } from '@ils/common-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
