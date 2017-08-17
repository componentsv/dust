import { D15600Page } from './app.po';

describe('d15600 App', () => {
  let page: D15600Page;

  beforeEach(() => {
    page = new D15600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
