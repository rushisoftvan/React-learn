import {useState} from "react";

function UpdateTaskComponent(props){

       const [updatetask,setUpdateTask] = useState({
           id:props.sendTaskForEdit.id,
           text:props.sendTaskForEdit.text,
           day:props.sendTaskForEdit.day
       })

       function setText(e){

           setUpdateTask(
               {
                   id:updatetask.id,
                   text:e.target.value,
                   day:updatetask.day
               }
           );
       }

       function setDay(e){
           setUpdateTask(
               {
                   id:updatetask.id,
                   text:updatetask.text,
                   day:e.target.value
               }
           );
       }
       function updateTask(e) {
           e.preventDefault();
           props.editTask(updatetask);

       }
    return(
        <>
            <h3>Update Component</h3>
            <div className="w-50">
                <from>
                    <div  className={"from"}>
                        {/*<input type="text" name="id" value={props.sendTaskForEdit.id} style={{display:'none'}}/>*/}
                        <label>Task :</label>
                        <input type="text" name="task" value={updatetask.text} className="form-control" placeholder="Add Task Here" onChange={setText}/>
                    </div>
                    <div className={"from"}><br/>
                        <label>Day & Time :</label>
                        <input type="text" name="day" value={updatetask.day} className="form-control" placeholder="Add day and time here" onChange={setDay}/>
                    </div><br/>
                    <button className="btn btn-dark" onClick={updateTask}>UpdateTask</button>
                </from>
            </div>
        </>
    );
}
export default UpdateTaskComponent;