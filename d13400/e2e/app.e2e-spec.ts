import { D13400Page } from './app.po';

describe('d13400 App', () => {
  let page: D13400Page;

  beforeEach(() => {
    page = new D13400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
