import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import { actionGetItem } from "../actions/actionGetItems";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";
import { useState } from "react";

function Homepage() {
  const [loading, setLoading] = useState(true);
  const { items, isLoading } = useSelector((state) => state.getItem);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(actionGetItem());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <div className="container mt-4 mb-4">
        <HeroBanner />
      </div>

      <div className="container mt-4 mb-4">
        <div className="col-md-12">
          <div className="row">
            {loading ? (
              <Loading />
            ) : (
              <div className="d-flex flex-row justify-content-center gap-4 flex-wrap align-items-stretch">
                {items?.items?.map((item) => (
                  <CardItem item={item} key={item.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
