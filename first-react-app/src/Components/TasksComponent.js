import {useState} from "react";




function TasksComponent(props){


    return (
        <>   <div className="mt-3">
            {
                props.tasks.length>0 ?
                    props.tasks.map((task)=>{

                        return   <div key={task.id} className="alert alert-secondary w-50" onClick={()=> props.onDelete(task)}>
                            <span>{task.text}</span>
                            <span>{task.day}</span>
                        </div>
                    })
                    : <p className ="alert alert-secondary w-50A">NO TASK AVAILABLE</p>
            }
              </div>

        </>
    );
}
export default TasksComponent;
