import {useState} from "react";

function AddTask(props) {

    const [newTask, setNewTask] = useState({
        id: "",
        text: "",
        day: ""
    });

    function settext(e) {

        setNewTask({
            id: "",
            text: e.target.value,
            day: newTask.day
        });
    }

    function setday(e) {

        setNewTask({
            id: "",
            text: newTask.text,
            day: e.target.value
        });
    }

    function addNewTask(e) {
        e.preventDefault()
        props.addTask(newTask);
        console.log(newTask)
    }

    return (
        <>
            <div className="w-50">
                <from>
                    <div className={"from"}>
                        <label>Task :</label>
                        <input type="text" className="form-control" placeholder="Add Task Here" onChange={settext}/>
                    </div>
                    <div className={"from"}><br/>
                        <label>Day & Time :</label>
                        <input type="text" className="form-control" placeholder="Add day and time here"
                               onChange={setday}/>
                    </div>
                    <br/>
                    <button className="btn btn-dark" onClick={addNewTask}>SaveTask</button>
                </from>
            </div>

        </>
    );
}

export default AddTask;