import { D20300Page } from './app.po';

describe('d20300 App', () => {
  let page: D20300Page;

  beforeEach(() => {
    page = new D20300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
