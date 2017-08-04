import { D10200Page } from './app.po';

describe('d10200 App', () => {
  let page: D10200Page;

  beforeEach(() => {
    page = new D10200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
