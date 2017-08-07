import { D13100Page } from './app.po';

describe('d13100 App', () => {
  let page: D13100Page;

  beforeEach(() => {
    page = new D13100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
