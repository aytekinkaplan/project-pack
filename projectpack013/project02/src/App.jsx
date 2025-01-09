import TodoList from "./TodoList";

const App = () => {
  const todos = [
    { title: "Learn React", completed: true },
    { title: "Build a project", completed: false },
    { title: "Deploy the app", completed: false },
  ];

  return (
    <div>
      <h1>My App</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
