import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaContentComponent } from './quota-content.component';

describe('QuotaContentComponent', () => {
  let component: QuotaContentComponent;
  let fixture: ComponentFixture<QuotaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotaContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
