import { D141300Page } from './app.po';

describe('d141300 App', () => {
  let page: D141300Page;

  beforeEach(() => {
    page = new D141300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
