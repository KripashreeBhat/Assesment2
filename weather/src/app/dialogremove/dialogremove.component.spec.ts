import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogremoveComponent } from './dialogremove.component';

describe('DialogremoveComponent', () => {
  let component: DialogremoveComponent;
  let fixture: ComponentFixture<DialogremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogremoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
