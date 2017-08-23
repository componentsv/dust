import { D24100Page } from './app.po';

describe('d24100 App', () => {
  let page: D24100Page;

  beforeEach(() => {
    page = new D24100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
