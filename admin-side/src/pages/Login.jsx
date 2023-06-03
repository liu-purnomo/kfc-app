import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserlogin } from "../actions/actionCreator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { actionResetData } from "../actions/creators/reset";

function Login() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { errorMessage, isLoading, isError, isSuccess, token } = useSelector(
    (state) => state.user
  );
  const dispacther = useDispatch();

  const [formValue, setFormValue] = useState({
    email: undefined,
    password: undefined,
  });

  const inputOnChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    await dispacther(actionUserlogin(formValue));
  };

  useEffect(() => {
    dispacther(actionResetData());
    setFormValue({
      email: undefined,
      password: undefined,
    });
  }, []);

  useEffect(() => {
    if (isError) {
      MySwal.fire({
        title: <strong>Error!</strong>,
        html: <i>{errorMessage}</i>,
        icon: "error",
      });
    } else if (isSuccess && token) {
      localStorage.setItem("access_token", token);
      MySwal.fire({
        html: <i>Loggin success</i>,
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      navigate("/");
    }
  }, [isError, isSuccess]);

  return (
    <div className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0 h3">Sign in</h1>
              </div>
              <form onSubmit={handleOnSubmitForm} action="" className="mt-4">
                <div className="form-group mb-4">
                  <label>Your Email</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <svg
                        className="icon icon-xs text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </span>
                    <input
                      onChange={inputOnChangeHandler}
                      type="email"
                      className="form-control"
                      placeholder="example@company.com"
                      name="email"
                      autoFocus
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group mb-4">
                    <label>Your Password</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon2">
                        <svg
                          className="icon icon-xs text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <input
                        onChange={inputOnChangeHandler}
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
