import { D15100Page } from './app.po';

describe('d15100 App', () => {
  let page: D15100Page;

  beforeEach(() => {
    page = new D15100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
