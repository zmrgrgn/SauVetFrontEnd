import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayvanTedaviComponent } from './hayvan-tedavi.component';

describe('HayvanTedaviComponent', () => {
  let component: HayvanTedaviComponent;
  let fixture: ComponentFixture<HayvanTedaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayvanTedaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HayvanTedaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
