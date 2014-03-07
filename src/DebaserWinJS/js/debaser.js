var debaserVM = WinJS.Class.define(
    function(constructor) {
        this.constructor = constructor;
    },
    {
        start: function() {
            //init constructor
        },
        loadItems: function() {
            //load list
        },
        loadMoreItems: function(days) {
            this.days = days;
        }
    });