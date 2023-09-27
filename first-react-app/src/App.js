import './App.css';

import {Fragment, useState} from 'react';
import ConditionalRendering from "./Components/ConditionalRendering";
import ListRendering from "./Components/ListRendering";
import ParentComponent from "./Components/ParentComponent";
import ContactApp from "./Components/ContactApp";

import FormComponent from "./Components/FormComponent";
import LifeCycleMethod from "./Components/LifeCycleMethod";
import HeaderComonent from "./Components/HeaderComonent";
import TasksComponent from "./Components/TasksComponent";
import AddTask from "./Components/AddTask";





let App = ()=> {

    const[tasks , setTasks]= useState([
        {
            id:1,
            text:"food Shopping",
            day:"Feb 5th at 2:30"
        },
        {
            id:2,
            text:"Doctar Appointment",
            day:"Feb 6th at 2:30"
        },
        {
            id:3,
            text:"Hair sallon Appointment",
            day:"Feb 6th at 2:30"
        }
    ]);

    function deletetask(t){

        const data = tasks.filter((task)=> task.id!==t.id);
        setTasks(data);
    }

    function addTask(task){
         setTasks([...tasks])
        console.log(task);
      console.log("Task is added");
    }

  return (
    <Fragment>
      <h1 className="text-center bg-black text-white">Root App</h1>
      {/*<MessageCard item="Mobile"/>*/}
      {/*<ShoppingComponents/>*/}
      {/*  <Product/>*/}
        <div className="row">
           <div className="col-md-4">
               <ConditionalRendering/>
           </div>
            <div className="col-md-8">
                <ListRendering/>
            </div>
        </div>
            <ParentComponent/>
        <ContactApp/>
             <FormComponent/>
             {/*<LifeCycleMethod/>*/}

        <div className="container">
            <HeaderComonent/>
            <AddTask addTask={addTask}/>
            <TasksComponent tasks={tasks} onDelete={deletetask}/>
        </div>



    </Fragment>
  );
}

export default App;
