import { D17500Page } from './app.po';

describe('d17500 App', () => {
  let page: D17500Page;

  beforeEach(() => {
    page = new D17500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
