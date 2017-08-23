import { D21400Page } from './app.po';

describe('d21400 App', () => {
  let page: D21400Page;

  beforeEach(() => {
    page = new D21400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
