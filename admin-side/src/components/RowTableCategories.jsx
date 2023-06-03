import { Trash, Gear } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  actionCategoriesGet,
  actionCatgeoryDelete,
} from "../actions/actionCreator";
import { useEffect } from "react";
import { actionResetData } from "../actions/creators/reset";

function RowTableCategories({ category }) {
  const MySwal = withReactContent(Swal);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const { isError, errorMessage, isSuccess } = useSelector(
    (state) => state.categoryDelete
  );

  const handleDeleteButton = async () => {
    await dispatcher(actionCatgeoryDelete(category.id));
  };

  const handleEditButton = () => {
    navigate(`/edit-category/${category.id}`);
  };

  useEffect(() => {
    if (isError && errorMessage) {
      MySwal.fire({
        html: <i>{errorMessage}</i>,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    } else if (isSuccess) {
      MySwal.fire({
        html: <i>Deleted Success</i>,
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      dispatcher(actionResetData());
      dispatcher(actionCategoriesGet());
    }
  }, [isError, isSuccess]);

  return (
    <>
      <tr>
        <td> {category.id} </td>
        <td>{category.name}</td>
        <td>
          <button
            onClick={handleEditButton}
            className="btn btn-sm me-2 btn-success"
          >
            <Gear className="text-white" />
          </button>
          <button
            onClick={handleDeleteButton}
            className="btn btn-sm  btn-danger"
          >
            <Trash className="text-white" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default RowTableCategories;
