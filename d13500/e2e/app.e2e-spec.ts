import { D13500Page } from './app.po';

describe('d13500 App', () => {
  let page: D13500Page;

  beforeEach(() => {
    page = new D13500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
