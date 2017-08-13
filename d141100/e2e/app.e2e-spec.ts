import { D141100Page } from './app.po';

describe('d141100 App', () => {
  let page: D141100Page;

  beforeEach(() => {
    page = new D141100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
