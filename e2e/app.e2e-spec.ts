import { CliprojectPage } from './app.po';

describe('cliproject App', () => {
  let page: CliprojectPage;

  beforeEach(() => {
    page = new CliprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
