$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        for(let feed of allFeeds) {
            it('URLs are defined', function() {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        };

        for(let feed of allFeeds) {
            it('names are defined', function() {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        }
    });

    // Menu

    describe('The menu', function() {

        // Checks if menu is hidden by default

        it('Menu hiding defined', function() {
            expect(loadFeed).toBeDefined();
        });

        // Checks whether the menu is hidden or exposed

        it('working toggle on click event', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

    // A test that ensures when the loadFeed
    // function is called and completes its work

         it('Feed uploaded', function() {
           expect($('.feed .entry').length).not.toBeLessThan(1);
         });
    });

    describe('New Feed Selection', function() {  

        // Checks if a new file has been uploaded
        var feedContent, newFeedContent;

        beforeEach(function(done) {
            feedContent = $('.feed').children().text();
            loadFeed(1, function() {
              newFeedContent = $('.feed').children().text();
              done();
            });
        });

        it('has a different content than previous one', function() {
            expect(newFeedContent).not.toBe(feedContent);
        });
    });

    
}());
