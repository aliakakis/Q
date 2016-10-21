/**
 * Micro library and helper functions
 */
;(function (window) {
    /**
     * This is a very simple jQuery like selector function
     * @param {string} selector - id/class/tag of DOM element to find
     * @returns {QueueComponent} - Object that will have the chaining
     */
    window.Q = window.q = function(selector) {
        var el;
        if (selector !== undefined && selector !== "") {
            if (document.querySelectorAll(selector).length > 1) {
                el = document.querySelectorAll(selector);
            }
            else {
                el = document.querySelectorAll(selector)[0];
            }
        }
        else {
            throw new SyntaxError("No selector passed");
        }

        /**
         * Class that handles creating our Q object
         * @param {string} el - Element selector
         * @constructor
         */
        function QueueComponent(el) {
            this.el = el;
        }

        /**
         * These functions will be added to the returned instance
         * @type {object}
         */
        var context = {
            /**
             * Apply css properties to the styles object
             * @param {node} node - The element node
             * @param {Object} props - JS literal object
             */
            css: function(node, props) {
                for (var prop in props) {
                    node.style[prop] = props[prop];
                }
            },

            /**
             * Change width/height of element setting display optionally
             * @param {string} width - Width in px e.g. "100px"
             * @param {string} height - Height in px e.g. "100px"
             * @returns {QueueComponent}
             */
            resize: function(width, height) {
                this.el.style.display = arguments[2] || "block";
                this.el.style.width = width; //window.innerWidth + "px" OR "100%";
                this.el.style.height = height; //window.innerHeight + browserBarOffset + "px";

                return this;
            },

            /**
             * Add transform scale into an element
             * @param {number} scaleX - Number of scaling in the x-axis
             * @param {number} scaleY - Number of scaling in the y-axis
             * @returns {QueueComponent}
             */
            scale: function(scaleX, scaleY) {
                this.el.style.transform = "scale(" + scaleX + ", " + scaleY + ")";
                this.el.style.webkitTransform = "scale(" + scaleX + ", " + scaleY + ")";
                this.el.style.mozTransform = "scale(" + scaleX + ", " + scaleY + ")";
                this.el.style.oTransform = "scale(" + scaleX + ", " + scaleY + ")";
                this.el.style.msTransform = "scale(" + scaleX + ", " + scaleY + ")";

                return this;
            }
        };

        for (var prop in context) {
            QueueComponent.prototype[prop] = context[prop];
        }

        return new QueueComponent(el);
    };

    /**
     * These functions will be added to the Q and q functions as static methods
     * @type {object}
     */
    var staticQContext = {
        /**
         * Create a custom exception object
         * @param {string} message - The message
         */
        QException: function(message) {
            this.message = message;
        },

        /**
         * Apply css properties to the styles object
         * @param {node} node - The element node
         * @param {Object} styleProps - JS literal object
         */
        applyCss: function(node, styleProps) {
            for (var prop in styleProps) {
                node.style[prop] = styleProps[prop];
            }
        },

        /**
         * Wrap window.setTimeout in order to better show that by using it
         * we are essentially placing code into a new event in the event queue
         * @param {function} callback - The function to run
         * @param {number} [ellapsedTime] - Time in milliseconds that is 0 by default
         */
        wait: function(callback, ellapsedTime) {
            window.setTimeout(callback, ellapsedTime = arguments[1] || 0);
        }
    };

    for (var staticProp in staticQContext) {
        Q[staticProp] = q[staticProp] = staticQContext[staticProp];
    }
})(window);