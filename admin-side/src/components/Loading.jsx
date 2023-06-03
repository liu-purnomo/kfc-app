function Loading() {
  return (
    <div className="text-center mt-5 mb-5 pb-5 pt-5">
      <div className="spinner-grow m-2 text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow m-2 text-success" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow m-2 text-danger" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow m-2 text-warning" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow m-2 text-info" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loading;
