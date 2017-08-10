import { D14300Page } from './app.po';

describe('d14300 App', () => {
  let page: D14300Page;

  beforeEach(() => {
    page = new D14300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
