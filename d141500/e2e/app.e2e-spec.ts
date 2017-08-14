import { D141500Page } from './app.po';

describe('d141500 App', () => {
  let page: D141500Page;

  beforeEach(() => {
    page = new D141500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
