import { Trash, Gear } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionItemDelete, actionItemGet } from "../actions/actionCreator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
function RowTableProduct({ item }) {
  const MySwal = withReactContent(Swal);
  const { isError, errorMessage } = useSelector((state) => state.deleteItem);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const handleEditButton = () => {
    navigate(`/edit-item/${item.id}`);
  };

  const handleDeleteButton = async () => {
    await dispatcher(actionItemDelete(item.id));
    if (isError) {
      MySwal.fire({
        html: <i>{errorMessage}</i>,
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    } else {
      MySwal.fire({
        html: <i>Deleted Success</i>,
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      await dispatcher(actionItemGet());
    }
  };

  return (
    <>
      <tr>
        <td> {item.id} </td>
        <td>{item.name}</td>
        <td>
          <img src={item.imgUrl} alt="gambar" />
        </td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.Category.name}</td>
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

export default RowTableProduct;
