import './App.css';

import React, {Fragment, useState} from 'react';
import ConditionalRendering from "./Components/ConditionalRendering";
import ListRendering from "./Components/ListRendering";
import ParentComponent from "./Components/ParentComponent";
import ContactApp from "./Components/ContactApp";

import FormComponent from "./Components/FormComponent";

import HeaderComonent from "./Components/HeaderComonent";
import TasksComponent from "./Components/TasksComponent";
import AddTask from "./Components/AddTask";
import UpdateTaskComponent from "./Components/UpdateTaskComponent";
import {Context} from "./Components/contextapi/Context";
import Routing from "./Components/Routing/Routing";
import JqueryAjaxDemo from "./Components/RequestApi/JqueryAjaxDemo";
import AxoisDemo from "./Components/RequestApi/AxoisDemo";
import FormikValidation from "./Components/FormikForm/FormikValidation";
import FormikDemo from "./Components/FormikForm/FormikDemo";
import YapValidation from "./Components/FormikForm/YapValidation";






let App = ()=> {
         const[editId,setEditId] = useState();
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
            day:"Feb 7  th at 2:30"
        }
    ]);

        const[isEdit,setIsEdit]=useState(false);

    function deletetask(t){

        const data = tasks.filter((task)=> task.id!==t.id);
        setTasks(data);
    }


    function addTask(task){
        // console.log(`My New Task`, task);
        // const lastItem = tasks[tasks.length - 1];
        // task['id']=lastItem.id+1;
        // console.log(lastItem);
        task['id']=Math.random().toString();
        const newTasks = [...tasks];
        newTasks.push(task);

        setTasks(newTasks);
        console.log(newTasks);
        console.log(tasks);

      console.log("Task is added");
    }
    function sendTaskForEdit(){
         return tasks.find((task)=> task.id===editId);
    }

    function isEditHandler(isEdit,taskid)
    {
        setEditId(taskid); //setIsEdit(isEdit);
        setIsEdit(isEdit);
        console.log(editId);
        console.log(isEdit)
    }
    function editTask(updatedTask){
        //setTasks(tasks.map(task=>task.id===updatedTask.id?{updatedTask}:task));
        const updatedTasks = [...tasks];
         const index =  updatedTasks.findIndex((task)=>task.id===updatedTask.id);
         updatedTasks[index]=updatedTask;
         setTasks(updatedTasks);
        setIsEdit(false);
        console.log(tasks);
    }

  return (
    <Fragment>
      <h1 className="text-center bg-black text-white">Root App</h1>
      {/*<MessageCard item="Mobile"/>*/}
      {/*<ShoppingComponents/>*/}
      {/*  <Product/>*/}
     {/*   <div className="row">*/}
     {/*      <div className="col-md-4">*/}
     {/*          <ConditionalRendering/>*/}
     {/*      </div>*/}
     {/*       <div className="col-md-8">*/}
     {/*           <ListRendering/>*/}
     {/*       </div>*/}
     {/*   </div>*/}
     {/*       <ParentComponent/>*/}
     {/*   <ContactApp/>*/}
     {/*<FormComponent/>*/}

     {/*        /!*<LifeCycleMethod/>*!/*/}

     {/*   <div className="container">*/}
     {/*       <HeaderComonent/>*/}

     {/*           {*/}
     {/*               isEdit===false?*/}
     {/*                   <AddTask addTask={addTask}/>*/}

     {/*                   :<UpdateTaskComponent sendTaskForEdit={sendTaskForEdit()} editTask={editTask}/>*/}
     {/*           }*/}


     {/*       <TasksComponent tasks={tasks} onDelete={deletetask} isEditHanlder={isEditHandler}/>*/}
     {/*   </div>*/}
     {/*   <Context/>*/}
        <Routing/>
        {/*<FormikDemo/>*/}
        <YapValidation/>



    </Fragment>
  );
}

export default App;
