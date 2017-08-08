import { D14100Page } from './app.po';

describe('d14100 App', () => {
  let page: D14100Page;

  beforeEach(() => {
    page = new D14100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
