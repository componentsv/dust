import { D11100Page } from './app.po';

describe('d11100 App', () => {
  let page: D11100Page;

  beforeEach(() => {
    page = new D11100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
