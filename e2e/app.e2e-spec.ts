import { ProjectNEWPage } from './app.po';

describe('project-new App', () => {
  let page: ProjectNEWPage;

  beforeEach(() => {
    page = new ProjectNEWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
