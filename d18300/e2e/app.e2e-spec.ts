import { D18300Page } from './app.po';

describe('d18300 App', () => {
  let page: D18300Page;

  beforeEach(() => {
    page = new D18300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
