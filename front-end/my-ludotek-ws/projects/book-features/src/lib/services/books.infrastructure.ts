import { Injectable, inject } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Book, Books } from "../models";
import { bookTable } from "./fakes";
import { HttpClient } from "@angular/common/http";

export interface BookFilter {
  value: string;
}

export interface GetAllBooks {
  getAll(filter: BookFilter): Observable<Books>;
}

export const inMemoryGetAllBooks: GetAllBooks = {
  getAll: (filter: BookFilter) => {
    const filterTable = bookTable.filter(item => item.title.toLowerCase().startsWith(filter.value.toLowerCase()))
    return of(filterTable).pipe(delay(1500));
  }
}

export const mockingFactory = () => inMemoryGetAllBooks;

@Injectable({
  providedIn: 'root',
  // useFactory: mockingFactory
})
export class GetAllBooksInfrastructure implements GetAllBooks {
  private readonly http = inject(HttpClient);

  getAll(filter: BookFilter): Observable<Books> {
    // TODO: don't do that in PROD !
    return this.http.get<Books>('https://localhost:49153/api/book');
  }

}
