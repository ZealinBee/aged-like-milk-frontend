import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPagePostsComponent } from './front-page-posts.component';

describe('FrontPagePostsComponent', () => {
  let component: FrontPagePostsComponent;
  let fixture: ComponentFixture<FrontPagePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPagePostsComponent]
    });
    fixture = TestBed.createComponent(FrontPagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
