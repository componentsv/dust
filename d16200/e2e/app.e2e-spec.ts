import { D16200Page } from './app.po';

describe('d16200 App', () => {
  let page: D16200Page;

  beforeEach(() => {
    page = new D16200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
