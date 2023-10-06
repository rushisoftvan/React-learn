import {useState} from "react";
import {FaRegTrashAlt} from "react-icons/fa";
import {RiEdit2Fill} from "react-icons/ri";

function TasksComponent(props) {
    console.log(`Taksks in view component`, props['tasks'])
    return (
        <>
            <div className="mt-3">
                {
                    props.tasks.length > 0 ?
                        props.tasks.map((task) => {


                            return <div key={task.id} className="alert alert-secondary w-50">
                                <div className="row">
                                    <div className="col-md-9">
                                        <span>{task.text} </span>
                                        <span>{task.day}</span>
                                    </div>
                                    <div className="col-md-3">
                                        <FaRegTrashAlt onClick={() => props.onDelete(task)}/>
                                        <RiEdit2Fill className="ms-3"
                                                     onClick={() => props.isEditHanlder(true, task.id)}/>
                                    </div>
                                </div>
                            </div>


                        })
                        : <p className="alert alert-secondary w-50 text-danger">NO TASK AVAILABLE</p>
                }
            </div>

        </>
    );
}

export default TasksComponent;
