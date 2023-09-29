import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewRoomsComponent } from './book-new-rooms.component';

describe('BookNewRoomsComponent', () => {
  let component: BookNewRoomsComponent;
  let fixture: ComponentFixture<BookNewRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNewRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
