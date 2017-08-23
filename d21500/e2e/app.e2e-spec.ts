import { D21500Page } from './app.po';

describe('d21500 App', () => {
  let page: D21500Page;

  beforeEach(() => {
    page = new D21500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
