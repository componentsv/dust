import { D141400Page } from './app.po';

describe('d141400 App', () => {
  let page: D141400Page;

  beforeEach(() => {
    page = new D141400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
