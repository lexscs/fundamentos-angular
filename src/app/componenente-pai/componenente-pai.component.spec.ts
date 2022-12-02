import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenentePaiComponent } from './componenente-pai.component';

describe('ComponenentePaiComponent', () => {
  let component: ComponenentePaiComponent;
  let fixture: ComponentFixture<ComponenentePaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenentePaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenentePaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
