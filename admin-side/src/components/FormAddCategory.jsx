import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { actionCategoriesPost } from "../actions/actionCreator";
import { actionResetData } from "../actions/creators/reset";
import { useNavigate } from "react-router-dom";

function FormCategory() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const dispacther = useDispatch();
  const [formValue, setFormValue] = useState({
    name: undefined,
  });

  const inputOnChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.categoryPost
  );
  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    await dispacther(actionCategoriesPost(formValue));
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
      navigate("/categories");
    }
  }, [isError, isSuccess, errorMessage]);
  return (
    <form onSubmit={handleOnSubmitForm}>
      <div className="col-md-6 mx-auto">
        <div className="mb-4">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            onChange={inputOnChangeHandler}
            id="name"
            name="name"
            required
          />
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

export default FormCategory;
