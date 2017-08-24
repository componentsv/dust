import { D25100Page } from './app.po';

describe('d25100 App', () => {
  let page: D25100Page;

  beforeEach(() => {
    page = new D25100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
