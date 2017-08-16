import { D15350Page } from './app.po';

describe('d15350 App', () => {
  let page: D15350Page;

  beforeEach(() => {
    page = new D15350Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
