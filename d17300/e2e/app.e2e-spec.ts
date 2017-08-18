import { D17300Page } from './app.po';

describe('d17300 App', () => {
  let page: D17300Page;

  beforeEach(() => {
    page = new D17300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
