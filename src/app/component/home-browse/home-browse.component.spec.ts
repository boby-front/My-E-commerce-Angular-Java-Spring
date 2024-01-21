import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrowseComponent } from './home-browse.component';

describe('HomeBrowseComponent', () => {
  let component: HomeBrowseComponent;
  let fixture: ComponentFixture<HomeBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBrowseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
