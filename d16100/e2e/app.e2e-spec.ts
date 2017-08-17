import { D16100Page } from './app.po';

describe('d16100 App', () => {
  let page: D16100Page;

  beforeEach(() => {
    page = new D16100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
