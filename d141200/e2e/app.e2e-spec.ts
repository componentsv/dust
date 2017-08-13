import { D141200Page } from './app.po';

describe('d141200 App', () => {
  let page: D141200Page;

  beforeEach(() => {
    page = new D141200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
