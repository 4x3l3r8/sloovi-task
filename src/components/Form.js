import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../redux/actions/TaskActions";
import { listUsers } from "../redux/actions/UserActions";

const Form = (props) => {
  const { opener, id } = props;

  let handleDelete = (e) => {
    e.preventDefault();
    if (id !== null) {
      props.deleteTask(id);
    } else {
    }
  };

  useEffect(() => {
    props.listUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <>
      <form method="post" onSubmit={props.submit}>
        <div className="row">
          <label htmlFor="task-description" className="form-label">
            Task Description
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="task-description" aria-describedby="basic-addon1" />
            <span className="input-group-text" id="basic-addon1">
              <i className="zmdi zmdi-receipt"></i>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon4">
                <i className="zmdi zmdi-calendar"></i>
              </span>
              <input type="date" className="form-control" id="date" aria-describedby="basic-addon4" />
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                <i className="zmdi zmdi-time"></i>
              </span>
              <input type="Time" className="form-control" id="time" aria-describedby="basic-addon3" />
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="assign-user" className="form-label">
            Assign User
          </label>
          <div className="input-group mb-3">
            <select defaultValue="2" className="form-select" aria-label="Default select example">
              <option value="0">Open this select menu</option>
              {/* {user.users !== undefined && user.users.map((user) => ()} */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            {/* <span className="input-group-text" id="basic-addon4">
            <i className="zmdi zmdi-receipt"></i>
          </span> */}
          </div>
        </div>
        <div className={id !== undefined ? "d-flex justify-content-between" : ""}>
          {id !== undefined && (
            <button type="button" className="btn btn-outline-none my-auto" data-bs-toggle="modal" data-bs-target="#deleteModal">
              <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete Task">
                <i className="zmdi zmdi-delete"></i>
              </span>
            </button>
          )}
          <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
            <button className="btn me-md-2" onClick={() => opener(false)} type="button">
              Cancel
            </button>
            <button className="btn btn-success px-3 mt-sm-1 mt-lg-0" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
      {/* <!-- Delete Modal --> */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirm task delete
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center text-capitalize fw-bold">Are you sure you want to delete this task?</div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete()}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listUsers: () => dispatch(listUsers()),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
