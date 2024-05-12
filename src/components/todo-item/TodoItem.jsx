const TodoItem = (props) => {
  console.log(props.item);
  return (
      <div style={{
          // stilizare conditionala. conditional styling
          textDecoration: props.item.completed === true ? 'line-through' : '',
          marginTop: '24px'
      }}>
          {/* randare conditionala. conditional rendering */}
          <h5> {props.item.completed === true ? 'Completed!!!' : 'Not yet'} </h5> 
          <h3> {props.item.todo} </h3>
      </div>
  )
};

export default TodoItem;