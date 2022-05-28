import { Component } from '@angular/core';
import { Arsenal } from './arsenal/arsenal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arsenal: Arsenal[] = []
  onItemAdicionado (item: Arsenal){
    this.arsenal = [item, ...this.arsenal]
  }
}
