import { Collapse } from 'bootstrap';
import React from 'react';
import { connect } from "react-redux";
import { addTask, listTasks, setTaskDefaults } from "../redux/actions/TaskActions";
import Form from './Form';
import TaskRow from './TaskRow';

const Main = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { tasks } = props; 

    const hideForm = () => {
        const collapseElementList = document.querySelectorAll('.collapse')
        // eslint-disable-next-line no-undef
        const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl))
        collapseList.forEach(collapse => collapse.hide())
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(props.tasks.task.title, function () {
            // reset title
            props.handleTitleChange("");
            // redirect
            setTimeout(() => props.setAddModal(false), 2000);
        });
    };

    return (
        <div className="container mt-4 mr-4">
            <div className="accordion w-md-25 h-25 zindex-toast" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Tasks
                        </div>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Form opener={hideForm} submit={handleSubmit} />
                        </div>
                    </div>
                    {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"> */}
                    <div className="accordion-collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body bg-white">
                        {/* {props.tasks.tasks.data !== undefined && props.tasks.tasks.data.map((item,id) => {return()})} */}
                            <TaskRow />
                            <hr className="dropdown-divider"></hr>
                            <TaskRow />
                            <hr className="dropdown-divider"></hr>
                            <TaskRow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.task,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listTasks: () => dispatch(listTasks()),
        setTaskDefaults: () => dispatch(setTaskDefaults()),
        addTask: (body, cb) => dispatch(addTask(body, cb)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
