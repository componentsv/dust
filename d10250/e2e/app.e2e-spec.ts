import { D10250Page } from './app.po';

describe('d10250 App', () => {
  let page: D10250Page;

  beforeEach(() => {
    page = new D10250Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
