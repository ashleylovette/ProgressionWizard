import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsEditComponent } from './songs-edit.component';

describe('SongsEditComponent', () => {
  let component: SongsEditComponent;
  let fixture: ComponentFixture<SongsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
