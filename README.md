# Q
This is a very simple jQuery like DOM manipulation library

# Example
- Pass a css selector e.g. #id, .class, div

Q(selector)

- Pass an object with CSS properties e.g.({width: "100px"})

.css(props)

- Width and height with optional display e.g. ("100px", "100px") 

.resize(width, height[, display]) 

- Scale element in the X,Y axis e.g. (1, 2)

.scale(scaleX, scaleY)

# Static methods

Q

- Create a custom exception to throw e.g. throw new QException("Error")

.QException(message) 

- Pass a node and apply CSS properties e.g.(document.body, {width: "100px"})

.applyCss(node, props)

- Wrap a function into a window.setTimeout in order to place this code into the event message queue

.wait(fn[, ellapsedTime]) 
