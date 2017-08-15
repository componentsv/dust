import { D141800Page } from './app.po';

describe('d141800 App', () => {
  let page: D141800Page;

  beforeEach(() => {
    page = new D141800Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
