describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('HomeScreen'))).toBeVisible();
    await expect(element(by.id('LeftView'))).toBeVisible();
    await expect(element(by.id('RightView'))).toBeVisible();

    await expect(element(by.id('FilmKu'))).toHaveText('FilmKu');
    await element(by.id('Menu')).tap();
    await element(by.id('Notification')).tap();

    await expect(element(by.id('NowShowing'))).toHaveText('Now Showing');
    await element(by.id('NowShowingCard')).tap();
    await expect(element(by.id('NowShowingFlatList'))).toBeVisible();

    await expect(element(by.id('Popular'))).toHaveText('Popular');
    await element(by.id('PopularCard')).tap();
    await expect(element(by.id('PopularFlatList'))).toExist();

    await expect(element(by.id('BottomBar'))).toBeVisible();
  });

  it('should have description screen', async () => {
    await element(by.id('Black Panther: Wakanda Forever')).tap();
    await expect(element(by.id('DescriptionScreen'))).toBeVisible();

    await expect(element(by.id('BackgroundImage'))).toBeVisible();
    await element(by.id('ThreeDots')).tap();

    await element(by.id('PlayTrailerBtn')).tap();
    await expect(element(by.id('PlayTrailerText'))).toHaveText('Play Trailer');

    await expect(element(by.id('MovieName'))).toHaveText(
      'Black Panther: Wakanda Forever',
    );
    await expect(element(by.id('BookmarkCopy3'))).toBeVisible();
    await expect(element(by.id('Rating'))).toBeVisible();

    await expect(element(by.id('MovieTypes'))).toBeVisible();

    await expect(element(by.id('Length'))).toBeVisible();
    await expect(element(by.id('Language'))).toBeVisible();
    await expect(element(by.id('RatingDescription'))).toBeVisible();

    await expect(element(by.id('HeadingDescription'))).toHaveText(
      'Description',
    );
    await expect(element(by.id('Description'))).toBeVisible();

    await expect(element(by.id('Cast'))).toHaveText('Cast');
    await element(by.id('DescriptionScreenSeemore')).tap();
    //await expect(element(by.id('Actors'))).toBeVisible();
  });

  it('should have search screen', async () => {
    await element(by.id('GoBack')).tap();
    await expect(element(by.id('HomeScreen'))).toBeVisible();

    await element(by.id('SearchScreenIcon')).tap();
    await expect(element(by.id('SearchScreen'))).toBeVisible();

    await expect(element(by.id('SearchBar'))).toBeVisible();
    await element(by.id('SearchHere')).typeText('Iron Man');
    await element(by.id('SearchIcon')).tap();

    await waitFor(element(by.id('SearchScreenPopularMovies'))).toBeVisible();

    await element(by.id('Iron ManSearchScreen')).tap();
    //await expect(element(by.id('DescriptionScreen'))).toBeVisible();
    //await element(by.id('GoBack')).tap();

    await element(by.id('GoBackHome')).tap();
  });
});
