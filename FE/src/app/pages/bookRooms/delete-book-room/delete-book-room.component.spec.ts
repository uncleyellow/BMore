import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookRoomComponent } from './delete-book-room.component';

describe('DeleteBookRoomComponent', () => {
  let component: DeleteBookRoomComponent;
  let fixture: ComponentFixture<DeleteBookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBookRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
