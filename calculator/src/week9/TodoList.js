export const TodoList = (props) => {
  let itemsList = props.items.map((i) => (
    <div>
      <input type="checkbox" ></input>
      <span>{i.todo}</span>
    </div>
  ));

  return <div>{itemsList}</div>;
};
