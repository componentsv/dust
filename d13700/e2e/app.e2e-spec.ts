import { D13700Page } from './app.po';

describe('d13700 App', () => {
  let page: D13700Page;

  beforeEach(() => {
    page = new D13700Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
