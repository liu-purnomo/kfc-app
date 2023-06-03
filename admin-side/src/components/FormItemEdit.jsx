import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCategoriesGet, actionItemEdit } from "../actions/actionCreator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { actionResetData } from "../actions/creators/reset";

function FormItemEdit({ itemDetail, itemId }) {
  const MySwal = withReactContent(Swal);
  const { categories } = useSelector((state) => state.categories);

  const dispacther = useDispatch();

  const [formValue, setFormValue] = useState({
    name: undefined,
    description: undefined,
    price: null,
    imgUrl: undefined,
    authorId: null,
    categoryId: null,
  });

  const navigate = useNavigate();

  const [ingredientList, setIngredientList] = useState([]);

  const onIngredientAddHandler = () => {
    setIngredientList([...ingredientList, { ingredient: "" }]);
  };

  const onIngredientRemoveHandler = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
  };

  const onIngredientChangeHandler = (event, index) => {
    const { name, value } = event.target;
    const list = [...ingredientList];
    list[index][name] = value;
    setIngredientList(list);
  };

  const inputOnChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.itemEdit
  );

  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    await dispacther(actionItemEdit(itemId, formValue, ingredientList));
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
        html: <i>Updated success</i>,
        icon: "success",
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      dispacther(actionResetData());
      navigate("/");
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    dispacther(actionCategoriesGet());
  }, []);

  useEffect(() => {
    if (itemDetail.item) {
      setFormValue({
        name: itemDetail.item.name,
        description: itemDetail.item.description,
        price: itemDetail.item.price,
        imgUrl: itemDetail.item.imgUrl,
        authorId: itemDetail.item.authorId,
        categoryId: itemDetail.item.categoryId,
      });

      let newList = [];
      itemDetail.item.Ingredients.forEach((element) => {
        newList.push({ ingredient: element.name });
      });
      setIngredientList(newList);
    }
  }, [itemDetail.item]);

  return (
    <form onSubmit={handleOnSubmitForm} action="" id="form-add-new-job">
      <div className="col-md-6 mx-auto">
        <div className="mb-4">
          <label>Menu Title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            defaultValue={formValue.name}
            onChange={inputOnChangeHandler}
            required
          />
        </div>

        <div className="mb-4">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            defaultValue={formValue.price}
            onChange={inputOnChangeHandler}
            required
          />
        </div>

        <div className="mb-4">
          <label className="my-1 me-2">Category Name</label>
          <select
            className="form-select"
            name="categoryId"
            id="categoryId"
            value={formValue.categoryId || ""}
            onChange={inputOnChangeHandler}
          >
            {categories?.categories?.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-4">
          <label>Menu Image</label>
          <input
            type="text"
            className="form-control"
            id="imgUrl"
            defaultValue={formValue.imgUrl}
            name="imgUrl"
            onChange={inputOnChangeHandler}
            required
          />
        </div>

        <div className="my-4">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Enter menu description..."
            id="description"
            name="description"
            rows="3"
            defaultValue={formValue.description}
            onChange={inputOnChangeHandler}
            required
          ></textarea>
        </div>

        <div>
          <label className="me-2">Ingredients </label>

          {ingredientList.map((ingredientsItem, index) => (
            <div
              key={index}
              className="d-flex flex-row justify-content-between"
            >
              <input
                type="text"
                defaultValue={ingredientsItem.ingredient}
                className="form-control col-md-8 d-flex mb-2 me-2"
                id="ingredient"
                onChange={(event) => onIngredientChangeHandler(event, index)}
                name="ingredient"
                required
              />
              <button
                onClick={onIngredientRemoveHandler}
                type="submit"
                className="btn bg-danger text-white d-flext items-center"
              >
                X
              </button>
            </div>
          ))}
          <button
            onClick={onIngredientAddHandler}
            type="submit"
            className="btn text-white bg-success"
          >
            + Add Ingredient
          </button>
        </div>

        <div className="mb-4 d-block">
          <button type="submit" className="btn col-md-12 bg-secondary">
            Save Menu
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormItemEdit;
