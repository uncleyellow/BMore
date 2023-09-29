import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutBookRoomComponent } from './put-book-room.component';

describe('PutBookRoomComponent', () => {
  let component: PutBookRoomComponent;
  let fixture: ComponentFixture<PutBookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutBookRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
