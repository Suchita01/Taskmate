const AddTask = ({handleSubmit, editid, task, setTask}) => {
  return (
      <section className='addTask'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={task.title} autoComplete="off" placeholder="Task" maxLength="25" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})}/>
          <input type="text-area" name="desc" value={task.desc} autoComplete="off" placeholder="Description" maxLength="50" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})}/>
          <button type="submit">{ editid ? "Update" : "Add"}</button>
        </form>
      </section>
  );
}

export default AddTask;