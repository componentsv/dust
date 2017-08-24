import { D25200Page } from './app.po';

describe('d25200 App', () => {
  let page: D25200Page;

  beforeEach(() => {
    page = new D25200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
