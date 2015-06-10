var React = require('react')

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
      return <Todo key={obj.title} title={obj.title}>{obj.detail}</Todo>
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
    title: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      checked: this.props.checked || false
    }
  },
  handleChange: function (e) {
    //this.setState({checked: e.target.checked})
    this.setState({checked: true})
  },
  render: function () {
    return (
      <tr>
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

var style = {
  tableContent: {
    border: "1px solid black"
  }
}

module.exports = TodoBox