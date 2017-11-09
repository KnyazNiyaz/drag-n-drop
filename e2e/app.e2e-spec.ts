import { DragNDropPage } from './app.po';

describe('drag-n-drop App', () => {
  let page: DragNDropPage;

  beforeEach(() => {
    page = new DragNDropPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
