import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import {FieldsetModule} from 'primeng/fieldset';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenciadorMemoriaComponent } from './gerenciador/gerenciador.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToastModule} from 'primeng/toast';
import { MessageModule } from 'primeng/message';

import { MemoriaComponent } from './gerenciador/componente/memoria.component';



@NgModule({
  declarations: [
    AppComponent,
    GerenciadorMemoriaComponent,
    MemoriaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    KeyFilterModule,
    ToastModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
