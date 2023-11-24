import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllBooksApplication } from '../../services/books.application';

@Component({
  selector: 'dtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  books$ = inject(GetAllBooksApplication).getAll();
}
