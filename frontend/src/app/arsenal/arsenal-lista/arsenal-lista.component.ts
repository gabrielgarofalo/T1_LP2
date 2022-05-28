import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Arsenal } from '../arsenal.model';
import { ArsenalService } from '../arsenal.service';

@Component({
  selector: 'app-arsenal-lista',
  templateUrl: './arsenal-lista.component.html',
  styleUrls: ['./arsenal-lista.component.css']
})
export class ArsenalListaComponent implements OnInit, OnDestroy {

  arsenal: Arsenal[] = []
  private arsenalSubscription: Subscription
  constructor(private arsenalService: ArsenalService) { 
  
  }

  ngOnInit(): void {
    this.arsenal = this.arsenalService.getArsenal()
    this.arsenalService.getListaArsenalAtualizada().subscribe((arsenal: Arsenal[]) => {
      this.arsenal = arsenal
  })
  }

  ngOnDestroy(): void {
    this.arsenalSubscription.unsubscribe()
  }

}
