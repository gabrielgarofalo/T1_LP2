import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArsenalInserirComponent } from './arsenal/arsenal-inserir/arsenal-inserir.component';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ArsenalListaComponent } from './arsenal/arsenal-lista/arsenal-lista.component'
import { ArsenalService } from './arsenal/arsenal.service';

@NgModule({
  declarations: [
    AppComponent,
    ArsenalInserirComponent,
    CabecalhoComponent,
    ArsenalListaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [ArsenalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
