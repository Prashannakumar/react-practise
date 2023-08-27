import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/todo";

import Greet from "./components/Greet";

function App(props) {
  function addTask(name) {
    alert(name+'parent');
  }
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    ></Todo>
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Greet></Greet>
    </div>
  );
}
export default App;
