import { D24300Page } from './app.po';

describe('d24300 App', () => {
  let page: D24300Page;

  beforeEach(() => {
    page = new D24300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
