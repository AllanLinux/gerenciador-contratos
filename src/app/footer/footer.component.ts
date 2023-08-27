import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  getCurrentYear(): number {
    const ano_current = new Date();
    return ano_current.getFullYear();
  }
  autor = "Allan Lopes Ferreira";

}
