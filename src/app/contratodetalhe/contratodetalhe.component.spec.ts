import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratodetalheComponent } from './contratodetalhe.component';

describe('ContratodetalheComponent', () => {
  let component: ContratodetalheComponent;
  let fixture: ComponentFixture<ContratodetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratodetalheComponent]
    });
    fixture = TestBed.createComponent(ContratodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
