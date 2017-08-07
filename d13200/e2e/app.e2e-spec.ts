import { D13200Page } from './app.po';

describe('d13200 App', () => {
  let page: D13200Page;

  beforeEach(() => {
    page = new D13200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
