var React = require('react')

var TodoList = React.createClass({
  displayName: 'TodoList',
  render: function () {
    return (
      <div className='todoList'>
        I am a TodoList
      </div>
    )
  }
})

module.exports = TodoList