import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesOfChangeComponent } from './stories-of-change.component';

describe('StoriesOfChangeComponent', () => {
  let component: StoriesOfChangeComponent;
  let fixture: ComponentFixture<StoriesOfChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesOfChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoriesOfChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
