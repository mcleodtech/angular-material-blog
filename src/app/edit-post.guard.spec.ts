import { TestBed } from '@angular/core/testing';

import { EditPostGuard } from './edit-post.guard';

describe('EditPostGuard', () => {
  let guard: EditPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
