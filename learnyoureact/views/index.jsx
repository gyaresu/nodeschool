var React = require('react')
var TodoList = require('./components/TodoList')
var TodoForm = require('./components/TodoForm')

var TodoBox = React.createClass({
  displayName: 'TodoBox',
  render: function () {
    return (
      <div className='todoBox'>
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
})

module.exports = TodoBox