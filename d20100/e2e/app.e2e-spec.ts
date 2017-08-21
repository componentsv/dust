import { D20100Page } from './app.po';

describe('d20100 App', () => {
  let page: D20100Page;

  beforeEach(() => {
    page = new D20100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
