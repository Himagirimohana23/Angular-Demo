import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedView } from './detailed-view';

describe('DetailedView', () => {
  let component: DetailedView;
  let fixture: ComponentFixture<DetailedView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
