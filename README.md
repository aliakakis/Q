# Q
This is a very simple jQuery like DOM manipulation library. In some cases I found my self using 3 methods from jQuery, css(), addClass() and removeClass(). Don't get my wrong I love jQuery but it is a very "heavy" library for simple stuff. Therefore this library was born. It has the bare minimum and even some helper static methods. The beauty is that you can remove the methods you are not interested in. I hope that you find this tiny library useful.


# Example
- Pass a css selector e.g. #id, .class, div

Q(selector)

- Pass an object with CSS properties e.g.({width: "100px"})

.css(props)

- Pass a string of classes to add e.g. "cls1 cls2"

.addClass(className)

- Pass a string of classes to remove e.g. "cls1 cls2"

.removeClass(className)

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
