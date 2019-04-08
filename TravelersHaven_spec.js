describe('travelershaven homepage', function() {

  //Variables
  var url = 'https://develop--naughty-goldwasser-4901d9.netlify.com/';
  var title = 'Havn';
  var location = 'Denver, Colorado, Un';
  var propertyName = 'property-28286';

  it('should have a title', function() {
    // Site appears to be non-angular
    browser.waitForAngularEnabled(false);

    // Open site and verify title
    browser.get(url);
    expect(browser.getTitle()).toContain(title);

    // Select location and click Search, which opens search results
    element(by.css('.ant-input')).sendKeys(location, protractor.Key.ENTER, '.');
    element(by.css("button[type='submit']")).click();
    browser.sleep(1500);

    // Verify url contains 'search?address='
    expect(browser.getCurrentUrl()).toContain('search?address=');

    // Select first property to simplify this test
    element(by.name(propertyName)).click();
    browser.sleep(1000);

    // Go to new tab that was opened
    browser.getAllWindowHandles().then(function (handles) {
    expect(handles.length).toEqual(2);
    browser.switchTo().window(handles[1]).then(function () {

       // Click on Request to Book
       element(by.buttonText('Request to Book')).click();
       browser.sleep(1000);

       // Verify login ID and Login Password are present
       expect(element(by.id('email')).isPresent()).toBe(true);
       expect(element(by.id('password')).isPresent()).toBe(true);

       // Verify Sign Up Link is present
       expect(element(by.linkText('Sign Up')).isPresent()).toBe(true);

       });
    });
  });
});