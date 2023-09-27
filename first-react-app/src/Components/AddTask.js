import {useState} from "react";

function AddTask(props) {

    const[newTask,setNewTask] = useState({
           taskName:"",
            dayAndTime:""
    });

    function setTaskName(e){

        setNewTask({
           taskName: e.target.value,
           dayAndTime: newTask.dayAndTime
        });
    }

    function setDayAndTime(e){

        setNewTask({
            taskName: newTask.taskName,
            dayAndTime:e.target.value
        });
    }
    function addNewTask(e){
        e.preventDefault()
       props.addTask(newTask);

    }

    return (
        <>
            <div className="w-50">
                <from>
                    <div  className={"from"}>
                        <label>Task :</label>
                        <input type="text" className="form-control" placeholder="Add Task Here" onChange={setTaskName} />
                    </div>
                    <div className={"from"}><br/>
                        <label>Day & Time :</label>
                        <input type="text" className="form-control" placeholder="Add day and time here" onChange={setDayAndTime}/>
                    </div><br/>
                    <button className="btn btn-dark" onClick={addNewTask}>SaveTask</button>
                </from>
            </div>

        </>
    );
}

export default AddTask;