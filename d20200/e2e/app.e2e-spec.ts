import { D20200Page } from './app.po';

describe('d20200 App', () => {
  let page: D20200Page;

  beforeEach(() => {
    page = new D20200Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
