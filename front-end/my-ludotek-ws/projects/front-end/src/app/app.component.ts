import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from 'search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'front-end';
  title = signal<string>('loading ...');

  changeTitle(): void {
    this.title.set(new Date().toString());
  }

  ngOnInit(): void {
    this.title.set('Ma ludoteck');
  }
}
