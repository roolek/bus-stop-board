import { BusStopBoardPage } from './app.po';

describe('bus-stop-board App', function() {
  let page: BusStopBoardPage;

  beforeEach(() => {
    page = new BusStopBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
