import { D24400Page } from './app.po';

describe('d24400 App', () => {
  let page: D24400Page;

  beforeEach(() => {
    page = new D24400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
