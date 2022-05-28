import { Component, Input, OnInit } from '@angular/core';
import { Arsenal } from '../arsenal.model';
import { ArsenalService } from '../arsenal.service';

@Component({
  selector: 'app-arsenal-lista',
  templateUrl: './arsenal-lista.component.html',
  styleUrls: ['./arsenal-lista.component.css']
})
export class ArsenalListaComponent implements OnInit {

  arsenal: Arsenal[] = []

  constructor(private arsenalService: ArsenalService) { 
  
  }

  ngOnInit(): void {
    this.arsenal = this.arsenalService.getArsenal()
  }

}
