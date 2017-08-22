import { D20600Page } from './app.po';

describe('d20600 App', () => {
  let page: D20600Page;

  beforeEach(() => {
    page = new D20600Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
