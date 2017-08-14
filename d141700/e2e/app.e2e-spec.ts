import { D141700Page } from './app.po';

describe('d141700 App', () => {
  let page: D141700Page;

  beforeEach(() => {
    page = new D141700Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
