import { signalStore, withMethods, withState } from "@ngrx/signals";
import { Books } from "../models";
import { inject } from "@angular/core";
import { GetAllBooksInfrastructure } from "../services/books.infrastructure";

export interface BooksState {
  items: Books
}

export const initialBookState: BooksState = {
  items: []
}

export const BooksStore  = signalStore(
  withState(initialBookState),
  withMethods((store, bookInfra = inject(GetAllBooksInfrastructure)) => ({

  }))
)
