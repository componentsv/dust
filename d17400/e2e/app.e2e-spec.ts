import { D17400Page } from './app.po';

describe('d17400 App', () => {
  let page: D17400Page;

  beforeEach(() => {
    page = new D17400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
