import type { Component } from 'solid-js';
import { Todo } from '~/routes';

type Props = {
  todo: Todo,
  handleChange: void
}

const todoCard: Component<Props> = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.completed()}
        onChange={() => { props.handleChange }}
      />
      <span
        style={{
          "text-decoration": props.todo.completed() ? "line-through" : "none",
        }}
      >
        {props.todo.text}
      </span>
    </div>
  )
}

export default todoCard
