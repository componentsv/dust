import { D24200Page } from './app.po';

describe('d24200 App', () => {
  let page: D24200Page;

  beforeEach(() => {
    page = new D24200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
