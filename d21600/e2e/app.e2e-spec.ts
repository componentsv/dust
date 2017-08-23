import { D21600Page } from './app.po';

describe('d21600 App', () => {
  let page: D21600Page;

  beforeEach(() => {
    page = new D21600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
