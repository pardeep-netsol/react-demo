# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

@Tests = React.createClass
  getInitialState: ->
    text: "hello world"
  
  render: ->
    <h2>{@state.text}</h2>