import { D21300Page } from './app.po';

describe('d21300 App', () => {
  let page: D21300Page;

  beforeEach(() => {
    page = new D21300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
