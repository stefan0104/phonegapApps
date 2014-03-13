/**
 * Created by SHoefler on 13.03.14.
 */

qx.Class.define("mobiletweets.page.Tweets",
    {
        extend: qx.ui.mobile.page.NavigationPage,

        construct: function () {
            this.base(arguments);
            this.set({
                title: "", // will be replaced by username
                showBackButton: true,
                backButtonText: "Back"
            });
        },

        properties :  {
            tweets : {
                check : "qx.data.Array",
                nullable : true,
                init : null,
                event : "changeTweets"
            }
        },

        events : {
            showTweet : "qx.event.type.Data"
        },

        members : {
            __list : null,

            _initialize : function() {
                this.base(arguments);

                // Create a new list instance
                var list = this.__list = new qx.ui.mobile.list.List();
                var dateFormat = new qx.util.format.DateFormat();
                // Use a delegate to configure each single list item
                list.setDelegate({
                    configureItem : function(item, value, row) {
                        // set the data of the model
                        item.setTitle(value.getText());
                        // we use the dataFormat instance to format the data value of the identica API
                        item.setSubtitle(dateFormat.format(new Date(value.getCreated_at())));
                        item.setImage(value.getUser().getProfile_image_url());
                        // we have more data to display, show an arrow
                        item.setShowArrow(true);
                    }
                });
                // bind the "tweets" property to the "model" property of the list instance
                this.bind("tweets", list, "model");
                // add the list to the content of the page
                this.getContent().add(list);

                list.addListener("changeSelection", this.__onChangeSelection, this);
            },

            __onChangeSelection : function(evt)
            {
                // retrieve the index of the selected row
                var index = evt.getData();
                this.fireDataEvent("showTweet", index);
            }
        }
    });
