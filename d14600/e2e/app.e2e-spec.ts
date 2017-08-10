import { D14600Page } from './app.po';

describe('d14600 App', () => {
  let page: D14600Page;

  beforeEach(() => {
    page = new D14600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
