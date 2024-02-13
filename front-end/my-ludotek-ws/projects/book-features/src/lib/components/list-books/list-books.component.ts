import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllBooksApplication } from '../../services/books.application';
import { SearchStore } from 'search';

@Component({
  selector: 'dtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBooksComponent {
  private readonly application = inject(GetAllBooksApplication);
  books$$ = this.application.getAll();
  isLoading$$ = this.application.isLoading();
  searchStore = inject(SearchStore).store;

  load(): void {
    this.application.load();
  }
}
