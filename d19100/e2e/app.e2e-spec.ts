import { D19100Page } from './app.po';

describe('d19100 App', () => {
  let page: D19100Page;

  beforeEach(() => {
    page = new D19100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
