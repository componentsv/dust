import { D14200Page } from './app.po';

describe('d14200 App', () => {
  let page: D14200Page;

  beforeEach(() => {
    page = new D14200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
