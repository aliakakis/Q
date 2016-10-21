# Q
This is a very simple jQuery like DOM manipulation library

# Example
Q("div")
  .css(props) // Pass an object with CSS properties e.g.{width: "100px"}
  .resize(width, height[, display]) // Width and height with optional display e.g. ("100px", "100px") 
  .scale(scaleX, scaleY) // Scale element in the X,Y axis e.g. (1, 2)
