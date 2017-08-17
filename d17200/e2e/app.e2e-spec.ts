import { D17200Page } from './app.po';

describe('d17200 App', () => {
  let page: D17200Page;

  beforeEach(() => {
    page = new D17200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
