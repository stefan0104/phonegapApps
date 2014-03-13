/**
 * Created by SHoefler on 13.03.14.
 */

qx.Class.define("mobiletweets.page.Input",
    {
        extend: qx.ui.mobile.page.NavigationPage,

        construct: function () {
            this.base(arguments);
            this.setTitle("Identica Client");
        },

        members: {
            // overridden
            _initialize: function () {
                this.base(arguments);

                var title = new qx.ui.mobile.form.Title("Please enter an identi.ca username");
                this.getContent().add(title);

                var form = this.__form = new qx.ui.mobile.form.Form();

                var input = this.__input = new qx.ui.mobile.form.TextField();
                input.setPlaceholder("Username");
                input.setRequired(true);
                form.add(input, "Username");

                // Add the form to the content of the page, using the Single to render
                // the form.
                this.getContent().add(new qx.ui.mobile.form.renderer.Single(form));

                // Create a new button instance and set the title of the button to "Show"
                var button = new qx.ui.mobile.form.Button("Show");
                // Add the "tap" listener to the button
                button.addListener("tap", this._onTap, this);
                // Add the button the content of the page
                this.getContent().add(button);
            },

            _onTap: function (evt) {
                // validate the form
                if (this.__form.validate())  {
                    var username = this.__input.getValue();
                    this.fireDataEvent("requestTweet", username);
                }
            },

            event: {
                "requestTweet": "qx.event.type.Data" // Define the event
            }
        }
    });