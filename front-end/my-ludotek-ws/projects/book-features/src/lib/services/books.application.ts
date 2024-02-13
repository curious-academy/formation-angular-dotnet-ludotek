import { Injectable, Signal, inject } from "@angular/core";
import { Observable, shareReplay, switchMap } from "rxjs";
import { Books } from "../models";
import { GetAllBooksInfrastructure } from "./books.infrastructure";
import { SearchStore } from "search";
import { toObservable } from '@angular/core/rxjs-interop';
import { BooksStore } from "../store";

@Injectable({
  providedIn: 'root'
})
export class GetAllBooksApplication {
  private readonly booksStore = inject(BooksStore);
  // private readonly api = inject(GetAllBooksInfrastructure);
  // private readonly searchStore = inject(SearchStore).store;
  // private readonly searchStoreObs$ = toObservable(this.searchStore);
  // private readonly getAllBooks$ = this.searchStoreObs$.pipe(
  //                                   switchMap(item => this.api.getAll({ value: item.item })),
  //                                 );

  getAll(): Signal<Books> {
    return this.booksStore.items;
  }

  isLoading(): Signal<Boolean> {
    return this.booksStore.isLoading;
  }

  load(): void {
    this.booksStore.loadAll('');
  }
}
