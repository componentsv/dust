import { D17100Page } from './app.po';

describe('d17100 App', () => {
  let page: D17100Page;

  beforeEach(() => {
    page = new D17100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
