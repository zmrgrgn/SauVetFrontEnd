import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayvanKayitAddComponent } from './hayvan-kayit-add.component';

describe('HayvanKayitAddComponent', () => {
  let component: HayvanKayitAddComponent;
  let fixture: ComponentFixture<HayvanKayitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayvanKayitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HayvanKayitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
