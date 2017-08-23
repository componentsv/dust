import { D22100Page } from './app.po';

describe('d22100 App', () => {
  let page: D22100Page;

  beforeEach(() => {
    page = new D22100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
