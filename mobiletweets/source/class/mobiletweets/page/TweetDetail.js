/**
 * Created by SHoefler on 13.03.14.
 */

qx.Class.define("mobiletweets.page.TweetDetail",
    {
        extend : qx.ui.mobile.page.NavigationPage,

        construct : function() {
            this.base(arguments);
            this.set({
                title : "Details",
                showBackButton : true,
                backButtonText : "Back"
            });
        },

        properties:
        {
            tweet :
            {
                check : "Object",
                nullable : true,
                init : null,
                event : "changeTweet"
            }
        },

        members :
        {
            _initialize : function()
            {
                this.base(arguments);
                // Create a new label instance
                var label = new qx.ui.mobile.basic.Label();
                this.getContent().add(label);
                // bind the "tweet.getText" property to the "value" of the label
                this.bind("tweet.text", label, "value");
            }
        }
    });