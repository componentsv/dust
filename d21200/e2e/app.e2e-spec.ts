import { D21200Page } from './app.po';

describe('d21200 App', () => {
  let page: D21200Page;

  beforeEach(() => {
    page = new D21200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
