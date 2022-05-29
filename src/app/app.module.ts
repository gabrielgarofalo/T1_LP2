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
import { MatTableModule } from '@angular/material/table' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ArsenalListaComponent } from './arsenal/arsenal-lista/arsenal-lista.component'
import { ArsenalService } from './arsenal/arsenal.service';

import { HttpClientModule} from '@angular/common/http';
import { ArsenalTabelaComponent } from './arsenal/arsenal-tabela/arsenal-tabela.component'

@NgModule({
  declarations: [
    AppComponent,
    ArsenalInserirComponent,
    CabecalhoComponent,
    ArsenalListaComponent,
    ArsenalTabelaComponent
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
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [ArsenalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
