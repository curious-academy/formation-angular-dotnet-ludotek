import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFeaturesComponent } from './book-features.component';

describe('BookFeaturesComponent', () => {
  let component: BookFeaturesComponent;
  let fixture: ComponentFixture<BookFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
