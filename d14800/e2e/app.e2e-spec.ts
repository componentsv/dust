import { D14800Page } from './app.po';

describe('d14800 App', () => {
  let page: D14800Page;

  beforeEach(() => {
    page = new D14800Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
