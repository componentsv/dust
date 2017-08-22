import { D20500Page } from './app.po';

describe('d20500 App', () => {
  let page: D20500Page;

  beforeEach(() => {
    page = new D20500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
