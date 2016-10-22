/**
 * Micro library and helper functions
 */
;(function (window) {

    /**
     * Q or q global object
     * @type {Q}
     */
    window.Q = window.q = Q;

    /**
     * This is a very simple jQuery like selector function
     * @param {string} selector - id/class/tag of DOM element to find
     * @returns {QueueComponent} - Object that will have the chaining
     */
    function Q(selector) {
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
             * @param {Object} props - JS literal object
             * @returns {QueueComponent}
             */
            css: function(props) {
                if (className === undefined) {
                    throw new SyntaxError("No css properties object e.g. {width: '100px'} passed");
                }
                
                for (var prop in props) {
                    this.el.style[prop] = props[prop];
                }

                return this;
            },
            
            /**
             * Add class/es to a dom element
             * @param {string} className - Classes to add "cls1 cls2"
             */
            addClass: function(className) {
                if (className === undefined) {
                    throw new SyntaxError("No class name/names passed");
                }
                
                this.el.className += " " + className; 
                
                return this;
            },
            
            /**
             * Remove class/es to a dom element
             * @param {string} className - Classes to remove "cls1 cls2"
             */
            removeClass: function(className) {
                if (className === undefined) {
                    throw new SyntaxError("No class name/names passed");
                }
                
                var elClassNameArray = this.el.className.split(" "),
                    classNameArray = className.split(" ");
                    
                for (var value of classNameArray) {
                    var elClassNameIndex = elClassNameArray.indexOf(value);
                    elClassNameArray.splice(elClassNameIndex, 1);
                }
                		
                this.el.className = elClassNameArray.join(" ");
              
                return this;
            },

            /**
             * Change width/height of element setting display optionally
             * @param {string} width - Width in px e.g. "100px"
             * @param {string} height - Height in px e.g. "100px"
             * @param {string} [display] - Display of element
             * @returns {QueueComponent}
             */
            resize: function(width, height, display) {
                this.el.style.width = width;
                this.el.style.height = height;
                this.el.style.display = arguments[2] || "block";

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
         * @param {number} [elapsedTime] - Time in milliseconds that is 0 by default
         */
        wait: function(callback, elapsedTime) {
            window.setTimeout(callback, elapsedTime = arguments[1] || 0);
        }
    };

    for (var staticProp in staticQContext) {
        Q[staticProp] = q[staticProp] = staticQContext[staticProp];
    }
})(window);
