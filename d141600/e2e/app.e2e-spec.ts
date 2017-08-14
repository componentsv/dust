import { D141600Page } from './app.po';

describe('d141600 App', () => {
  let page: D141600Page;

  beforeEach(() => {
    page = new D141600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
