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
import { ArsenalService } from './arsenal/arsenal.service';

import { HttpClientModule} from '@angular/common/http';
import { ArsenalTabelaComponent, DialogOverviewExampleDialog } from './arsenal/arsenal-tabela/arsenal-tabela.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ArsenalInserirComponent,
    CabecalhoComponent,
    ArsenalTabelaComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ArsenalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
