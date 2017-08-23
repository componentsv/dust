import { D22200Page } from './app.po';

describe('d22200 App', () => {
  let page: D22200Page;

  beforeEach(() => {
    page = new D22200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
