var React = require('react')

var style = {
  checkedTodo: {
    textDecoration: 'line-through'
  },
  notCheckedTodo: {
    textDecoration: 'none'
  },
  tableContent: {
    border: '1px solid black'
  }
}

var TodoBox = React.createClass({
  displayName: 'TodoBox',
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    )
  }
})

var TodoList = React.createClass({
  displayName: 'TodoList',
  render: function () {
    var todo = this.props.data.map(function(obj) {
      return <Todo id={obj.id} key={obj.title} title={obj.title}>{obj.detail}</Todo>
    })
    return (
      <div className="todoList">
        <table style={{border: '2px solid black'}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    )
  }
})

var Todo = React.createClass({
  displayName: 'Todo',
  propTypes: {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      checked: this.props.checked || false,
      TodoStyle: style.notCheckedTodo
    }
  },
  handleChange: function (e) {
    this.setState({checked: e.target.checked})
    if (e.target.checked) {
      this.setState({TodoStyle: style.checkedTodo})
    } else {
      this.setState({TodoStyle: style.notCheckedTodo})
    }
  },
  render: function () {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><input checked={this.state.checked} type="checkbox" onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    )
  }
})

var TodoForm = React.createClass({
  displayName: 'TodoForm',
  render: function () {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
})


module.exports = TodoBox