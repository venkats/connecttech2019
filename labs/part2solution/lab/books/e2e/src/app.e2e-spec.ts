import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display books', () => {
    page.navigateTo();                            
    const text = page.getMainText();
    
    expect(text).toContain('Books');
    expect(text).toContain('Title');
    expect(text).toContain('Author');
  });
});
