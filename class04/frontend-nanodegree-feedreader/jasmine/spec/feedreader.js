$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Scroll through a list containing URL
        
        for(let feed of allFeeds) {
            it('Has URL defined', function() {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        };

        // Scroll through a list containing NAME
         
        for(let feed of allFeeds) {
            it('Has name defined', function() {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        }
    });

    // Defined Menu

    describe('The menu', function() {

        // Checks if menu contains class 'menu-hidden'

        it('Is Menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Checks for menu click

        it('The menu is open and hidden', function() {
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // Defined "Initial Entries"

    describe('Initial Entries', function() {

        // Checking if there is at least one element

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('This is present when loadFeed is called', function() {
            let check = $('.feed .entry-link').length;
            console.log(check);

            expect(check).toBeGreaterThan(0);
        });
    });

    // Create New Feed Selection

    describe('New Feed Selection', function() {
        let initialFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();

                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('New feed uploaded', function() {
            let newFeed = $('.feed').html();

            expect(newFeed).not.toBe(initialFeed);
        });
    });
}());
