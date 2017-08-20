import { D18200Page } from './app.po';

describe('d18200 App', () => {
  let page: D18200Page;

  beforeEach(() => {
    page = new D18200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
