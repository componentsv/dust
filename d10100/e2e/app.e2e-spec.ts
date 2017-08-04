import { Ch10Ex100Page } from './app.po';

describe('ch10-ex100 App', () => {
  let page: Ch10Ex100Page;

  beforeEach(() => {
    page = new Ch10Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
