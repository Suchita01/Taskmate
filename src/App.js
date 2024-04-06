import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {
  const [task, setTask] = useState({'id':0,title: '', desc: ''});
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [editid, setEditid] = useState(0);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");

  const handleSubmit = (event) => {
    event.preventDefault();    

    if(editid){
      const date = new Date();
      const selectedTask = tasklist.find(item => item.id === editid);
      const updateTask = tasklist.map((e) => (e.id === selectedTask.id ? (e = {id: e.id, title: task.title, desc: task.desc, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: e.id, title: e.title, desc: e.desc, time: e.time}));
      setTasklist(updateTask);
      setEditid(0);
      setTask({id:0, title: '', desc: ''});
      return;
    }

    if(task){
      const date = new Date();
      const id = date.getTime()
      setTasklist([...tasklist, {id: id, title: task.title, desc: task.desc, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}]);
      setTask({id:0, title: '', desc: ''});
    }

  }

  const handleEdit = (id) => {
    console.log("Under Edit ".id)
    const selectedTask = tasklist.find(task => task.id === id);
    setTask(selectedTask);
    setEditid(id);
  }

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter(task => task.id !== id);
    setTasklist(updatedTasklist);
  }

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme}>
          Taskmate
        </Header>
        <AddTask handleSubmit={handleSubmit} editid={editid} task={task} setTask={setTask}/>
        {tasklist.length>0 &&
           <ShowTask tasklist={tasklist} setTasklist={setTasklist} handleEdit={handleEdit} handleDelete={handleDelete}/>
        }
      </div>
    </div>
  );
}

export default App;