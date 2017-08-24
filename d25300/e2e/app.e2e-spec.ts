import { D25300Page } from './app.po';

describe('d25300 App', () => {
  let page: D25300Page;

  beforeEach(() => {
    page = new D25300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
