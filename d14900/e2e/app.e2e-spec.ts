import { D14900Page } from './app.po';

describe('d14900 App', () => {
  let page: D14900Page;

  beforeEach(() => {
    page = new D14900Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
