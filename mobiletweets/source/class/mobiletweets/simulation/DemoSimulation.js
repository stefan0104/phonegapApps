/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

/**
 * This class demonstrates how to define simulated interaction tests for your
 * application. See the manual for details:
 * {@link http://manual.qooxdoo.org/3.5/pages/development/simulator.html}
 */
qx.Class.define("mobiletweets.simulation.DemoSimulation", {

    extend: simulator.unit.TestCase,

    members: {
        /*
         ---------------------------------------------------------------------------
         TESTS
         ---------------------------------------------------------------------------
         */

        testNextAndBack: function () {
            this.getQxSelenium().qxClick('//div[text()="Next page"]');
            this.getSimulation().wait("1000");
            var p2 = this.getQxSelenium().isElementPresent('//div[text()="Content of page 2"]')
            this.assert(p2, "page not changed after clicking Next page!");

            this.getQxSelenium().qxClick('//div[text()="Back"]');
            this.getSimulation().wait("1000");
            var p1 = this.getQxSelenium().isElementPresent('//div[text()="Next page"]');
            this.assert(p1, "page not changed after clicking Back!");
        }
    }

});
