import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArsenalTabelaComponent } from './arsenal/arsenal-tabela/arsenal-tabela.component';
import { ArsenalInserirComponent } from './arsenal/arsenal-inserir/arsenal-inserir.component';
const routes: Routes = [
 { path: '', component: ArsenalTabelaComponent },
 {path: 'criar', component: ArsenalInserirComponent}
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes)
 ],
 exports: [
 RouterModule
 ]
})
export class AppRoutingModule{
}
