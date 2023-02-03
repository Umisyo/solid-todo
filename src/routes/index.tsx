import { For, createSignal, Component } from "solid-js";
import TodoCard from '../components/TodoCard';

export interface Todo {
  id: number;
  text: string;
  completed: () => boolean;
  setCompleted: (completed: boolean) => void;
}

const Home: Component = () => {

  const [todos, setTodos] = createSignal<Todo[]>([]);
  let input: HTMLInputElement | undefined;
  let todoId = 0;

  const addTodo = (text: string) => {
    const [completed, setCompleted] = createSignal<boolean>(false);
    setTodos([...todos(), { id: ++todoId, text, completed, setCompleted }]);
  };
  const toggleTodo = (id: number) => {
    const index = todos().findIndex((t) => t.id === id);
    const todo = todos()[index];
    if (todo) todo.setCompleted(!todo.completed());
  };

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input?.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {(todo) => {
          return (
            <TodoCard todo={todo} handleChange={toggleTodo(todo.id)} />
          );
        }}
      </For>
    </>
  );

}


export default Home;