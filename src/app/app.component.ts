import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog-angular';


  posts = [
    {
      title: "Article 1",
      content: "Lorem ipsum..."
    },
    {
      title: "Article 2",
      content: "Lorem ipsum ipsum..."
    }
  ]
}
