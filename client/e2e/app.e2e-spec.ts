import { SurPage } from './app.po';

describe('sur App', function() {
  let page: SurPage;

  beforeEach(() => {
    page = new SurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
