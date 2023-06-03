import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import setTitle from "../utils/setTitle";
import FormItemEdit from "../components/FormItemEdit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionItemsDetail } from "../actions/actionCreator";
import Loading from "../components/Loading";

function EditItem() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispacther = useDispatch();
  const buttonInfo = {
    name: "Add new item",
    link: "/add-item",
  };

  const { itemDetail } = useSelector((state) => state.itemDetail);
  const pageTitle = "Edit Item";
  setTitle(pageTitle);
  useEffect(() => {
    dispacther(actionItemsDetail(id));
  }, [dispacther]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="row">
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      {loading ? (
        <Loading />
      ) : (
        <div className="col-12 mb-4">
          <div className="card border-0 shadow components-section">
            <div className="card-body">
              <div className="row mb-4">
                <FormItemEdit itemDetail={itemDetail} itemId={id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditItem;
