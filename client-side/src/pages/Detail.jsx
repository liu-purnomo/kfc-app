import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionGetItemDetail } from "../actions/actionGetItemDetail";
import Loading from "../components/Loading";
import { useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { item, isLoading } = useSelector((state) => state.getItemDetail);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(actionGetItemDetail(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="container mt-4 mb-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="col-md-8 mx-auto">
          <div className="row">
            <div className="col-md-6">
              <img className="img img-fluid" src={item?.item?.imgUrl} alt="" />
            </div>
            <div className="col-md-6">
              <div className="card card-body text-center">
                <h3>{item?.item?.name}</h3>
                <p className="lead">Category : {item?.item?.Category.name}</p>
                <p>{item?.item?.description}</p>
                <p>Price : Rp. {item?.item?.price}</p>
                <ul className="list-group">
                  <li className="list-group-item active">Ingredient</li>
                  {item?.item?.Ingredients?.map((ingredient) => (
                    <li key={ingredient.id} className="list-group-item">
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
