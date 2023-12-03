import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  toggleParagraph = false;
  clickArray = []
  
  buttonClick(){
    this.toggleParagraph = !this.toggleParagraph
    this.clickArray.push(this.clickArray.length + 1)
  }
}
