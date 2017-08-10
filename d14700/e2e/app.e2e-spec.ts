import { D14700Page } from './app.po';

describe('d14700 App', () => {
  let page: D14700Page;

  beforeEach(() => {
    page = new D14700Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
