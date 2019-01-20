import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaAndGemComponent } from './spa-and-gem.component';

describe('SpaAndGemComponent', () => {
  let component: SpaAndGemComponent;
  let fixture: ComponentFixture<SpaAndGemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaAndGemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaAndGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
