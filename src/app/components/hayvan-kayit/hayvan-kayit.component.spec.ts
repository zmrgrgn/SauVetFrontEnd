import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayvanKayitComponent } from './hayvan-kayit.component';

describe('HayvanKayitComponent', () => {
  let component: HayvanKayitComponent;
  let fixture: ComponentFixture<HayvanKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayvanKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HayvanKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
