import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenenteFilhoComponent } from './componenente-filho.component';

describe('ComponenenteFilhoComponent', () => {
  let component: ComponenenteFilhoComponent;
  let fixture: ComponentFixture<ComponenenteFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenenteFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenenteFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
