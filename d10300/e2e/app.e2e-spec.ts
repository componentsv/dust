import { D10300Page } from './app.po';

describe('d10300 App', () => {
  let page: D10300Page;

  beforeEach(() => {
    page = new D10300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
