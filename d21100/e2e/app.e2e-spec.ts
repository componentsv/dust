import { D21100Page } from './app.po';

describe('d21100 App', () => {
  let page: D21100Page;

  beforeEach(() => {
    page = new D21100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
