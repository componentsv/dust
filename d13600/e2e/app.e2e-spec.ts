import { D13600Page } from './app.po';

describe('d13600 App', () => {
  let page: D13600Page;

  beforeEach(() => {
    page = new D13600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
