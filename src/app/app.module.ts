import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';
import { BtnAdicionarDirective } from './btn-adicionar.directive';
import { BtnLimparDirective } from './btn-limpar.directive';
import { BtnApagarDirective } from './btn-apagar.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BtnAdicionarDirective,
    BtnLimparDirective,
    BtnApagarDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
