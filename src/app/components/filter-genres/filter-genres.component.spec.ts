import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGenresComponent } from './filter-genres.component';

describe('FilterGenresComponent', () => {
  let component: FilterGenresComponent;
  let fixture: ComponentFixture<FilterGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGenresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
