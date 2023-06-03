import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { actionUserPost } from "../actions/actionCreator";
import { actionResetData } from "../actions/creators/reset";
import { useNavigate } from "react-router-dom";

function FormAddUser() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const dispacther = useDispatch();
  const [formValue, setFormValue] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    phoneNumber: undefined,
    address: undefined,
  });

  const inputOnChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.userPost
  );
  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    await dispacther(actionUserPost(formValue));
  };

  useEffect(() => {
    if (isError) {
      MySwal.fire({
        title: "Error!",
        html: <i>{errorMessage}</i>,
        icon: "error",
        timer: 1500,
      });
    } else if (isSuccess) {
      MySwal.fire({
        html: <i>New User created success</i>,
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      dispacther(actionResetData());
      navigate("/list-user");
    }
  }, [isError, isSuccess, errorMessage]);
  return (
    <form onSubmit={handleOnSubmitForm}>
      <div className="col-md-6 mx-auto">
        <div className="mb-4">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            onChange={inputOnChangeHandler}
            id="name"
            name="username"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={inputOnChangeHandler}
            id="name"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            onChange={inputOnChangeHandler}
            id="name"
            name="password"
            required
          />
        </div>
        <div className="mb-4">
          <label>Phone number</label>
          <input
            type="text"
            onChange={inputOnChangeHandler}
            className="form-control"
            id="name"
            name="phoneNumber"
          />
        </div>
        <div className="my-4">
          <label>address</label>
          <textarea
            className="form-control"
            onChange={inputOnChangeHandler}
            placeholder="Enter your address..."
            id="address"
            name="address"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4 d-block">
          <button type="submit" className="btn col-md-12 bg-secondary">
            Create New User
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddUser;
