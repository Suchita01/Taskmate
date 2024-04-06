const AddTask = ({handleSubmit, editid, task, setTask}) => {
  return (
      <section className='addTask'>
        <form onSubmit={handleSubmit}>
          <textarea rows={1} type="text" name="title" required value={task.title} autoComplete="off" placeholder="Task" maxLength="20" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})}/>
          <textarea rows={3} name="desc" required value={task.desc} autoComplete="off" placeholder="Description" maxLength="50" onChange={(e) => setTask({...task, [e.target.name]: e.target.value})}/>
          <button type="submit">{ editid ? "UPDATE" : "ADD"}</button>
        </form>
      </section>
  );
}

export default AddTask;