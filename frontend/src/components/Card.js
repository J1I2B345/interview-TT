

const TaskCard = ({ id, title, completed, onCompletedUpdated, onDelete }) => {
  return (
    <div key={id}>
      <h3>title {title}</h3>
      <label>completed</label>
      <input
        type="checkbox"
        onChange={onCompletedUpdated}
        value={completed}
        defaultValue={completed}
      ></input>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default TaskCard;
