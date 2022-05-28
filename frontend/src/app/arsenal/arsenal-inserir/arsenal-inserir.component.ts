import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Arsenal } from '../arsenal.model';
import { ArsenalService } from '../arsenal.service';

@Component({
  selector: 'app-arsenal-inserir',
  templateUrl: './arsenal-inserir.component.html',
  styleUrls: ['./arsenal-inserir.component.css']
})
export class ArsenalInserirComponent{

  constructor(private arsenalService: ArsenalService){

  }

  onInserirArsenal(form: NgForm){
    if(form.invalid) return
    this.arsenalService.adicionarArsenal(
      form.value.tipo,
      form.value.nome,
      form.value.quantidade
    )
    form.resetForm();
  }

}
