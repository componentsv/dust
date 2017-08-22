import { D20400Page } from './app.po';

describe('d20400 App', () => {
  let page: D20400Page;

  beforeEach(() => {
    page = new D20400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
