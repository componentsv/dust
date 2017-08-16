import { D15500Page } from './app.po';

describe('d15500 App', () => {
  let page: D15500Page;

  beforeEach(() => {
    page = new D15500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
