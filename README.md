# Q
This is a very simple jQuery like DOM manipulation library

# Example
Q("div")

.css(props) // Pass an object with CSS properties e.g.({width: "100px"})

.resize(width, height[, display]) // Width and height with optional display e.g. ("100px", "100px") 

.scale(scaleX, scaleY) // Scale element in the X,Y axis e.g. (1, 2)

# Globals

Q

.QException(message) // Create a custom exception to throw e.g. throw new QException("Error");

.applyCss(node, props) // Pass an node and apply CSS properties e.g.(document.body, {width: "100px"})

.wait(fn[, ellapsedTime]) // Wrap a function into a window.setTimeout in order to place this code into the event message queue
