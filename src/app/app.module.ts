import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormValidatorsService} from './form-validators.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [FormValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
