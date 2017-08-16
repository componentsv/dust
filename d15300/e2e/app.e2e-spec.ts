import { D15300Page } from './app.po';

describe('d15300 App', () => {
  let page: D15300Page;

  beforeEach(() => {
    page = new D15300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
