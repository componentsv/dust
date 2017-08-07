import { D13300Page } from './app.po';

describe('d13300 App', () => {
  let page: D13300Page;

  beforeEach(() => {
    page = new D13300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
