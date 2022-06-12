import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editTask, handleTaskTitle, setTaskDefaults, showTask } from "../redux/actions/TaskActions";
import Form from "./Form";
import "./style.css";

const TaskRow = (props) => {
  const [edit, setEdit] = useState(false);


  useEffect(() => {
    props.setTaskDefaults();
    // props.showTask(props.task.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let handleSubmit = (e) => {
    e.preventDefault();
    props.editCategory(props.tasks.task, props.id, function () {
      // reset title
      props.handleTaskChange("");
      // redirect
      setTimeout(() => props.setEditModal(false), 2000);
    });
  };

  return edit ? (
    <Form opener={setEdit} id={props.task.id} task={props.task} submit={handleSubmit} />
  ) : (
    <div className="d-flex justify-content-between">
      <div className="d-flex ">
        <img src="https://via.placeholder.com/30" alt="user" className="pe-1 my-auto rounded-1" />
        <div className="d-flex flex-column g-0 justify-content-center">
          <span className="text-black fw-bold" style={{ fontSize: "14px" }}>
            Task Name
          </span>
          <span className="text-pink fw-lighter">Date</span>
        </div>
      </div>
      <button type="button" onClick={() => setEdit(true)} className="btn btn-outline-dark my-auto">
        <i className="zmdi zmdi-edit"></i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.task,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showTask: (id) => dispatch(showTask(id)),
    handleTitleChange: (title) => dispatch(handleTaskTitle(title)),
    editTask: (body, id, cb) => dispatch(editTask(body, id, cb)),
    setTaskDefaults: () => dispatch(setTaskDefaults()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskRow);
