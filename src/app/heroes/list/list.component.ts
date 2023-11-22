import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  host: {ngSkipHydration: 'true'},
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hilk', 'Thor', 'Black Panter'];
  public deletedHero?: string;


  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
