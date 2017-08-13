import { D141000Page } from './app.po';

describe('d141000 App', () => {
  let page: D141000Page;

  beforeEach(() => {
    page = new D141000Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
