import { D15200Page } from './app.po';

describe('d15200 App', () => {
  let page: D15200Page;

  beforeEach(() => {
    page = new D15200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
