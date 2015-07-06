import {React} from 'react'
import {TodoList} from './components/TodoList'
import {TodoForm} from './components/TodoForm'

export default React.createClass({
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