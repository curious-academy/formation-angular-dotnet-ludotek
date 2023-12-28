import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Book, Books } from "../models";
import { bookTable } from "./fakes";

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
  useFactory: mockingFactory
})
export class GetAllBooksInfrastructure implements GetAllBooks {

  getAll(filter: BookFilter): Observable<Books> {
    throw new Error("Method not implemented.");
  }

}
