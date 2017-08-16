import { D15400Page } from './app.po';

describe('d15400 App', () => {
  let page: D15400Page;

  beforeEach(() => {
    page = new D15400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
