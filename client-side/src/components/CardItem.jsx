import { useNavigate } from "react-router-dom";

function CardItem({ item }) {
  const navigate = useNavigate();
  const handleSeeDetail = () => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="col-md-3 d-flex align-items-stretch">
      <div className="card ">
        <div className="card-body">
          <img className="img card-img img-fluid" src={item.imgUrl} alt="" />
          <div className="text-center">
            <h3>{item.name}</h3>
            <p>Price : Rp. {item.price}</p>
          </div>
        </div>
        <div className="card-footer">
          <button
            onClick={handleSeeDetail}
            className="btn btn-danger col-md-12"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
