import { D20700Page } from './app.po';

describe('d20700 App', () => {
  let page: D20700Page;

  beforeEach(() => {
    page = new D20700Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
