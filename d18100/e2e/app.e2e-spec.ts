import { D18100Page } from './app.po';

describe('d18100 App', () => {
  let page: D18100Page;

  beforeEach(() => {
    page = new D18100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
