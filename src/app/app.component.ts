import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((data: any) => {
      if (data.url === '/') {
        this.router.navigate(['/product-list']);
      }
    });
  }

  title = 'my-stores';
}
