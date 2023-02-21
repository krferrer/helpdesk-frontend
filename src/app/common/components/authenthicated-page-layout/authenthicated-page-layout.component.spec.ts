import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenthicatedPageLayoutComponent } from './authenthicated-page-layout.component';

describe('AuthenthicatedPageLayoutComponent', () => {
  let component: AuthenthicatedPageLayoutComponent;
  let fixture: ComponentFixture<AuthenthicatedPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenthicatedPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenthicatedPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
