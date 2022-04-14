import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HekimDeleteComponent } from './hekim-delete.component';

describe('HekimDeleteComponent', () => {
  let component: HekimDeleteComponent;
  let fixture: ComponentFixture<HekimDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HekimDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HekimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
