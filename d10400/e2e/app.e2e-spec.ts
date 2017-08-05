import { D10400Page } from './app.po';

describe('d10400 App', () => {
  let page: D10400Page;

  beforeEach(() => {
    page = new D10400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
