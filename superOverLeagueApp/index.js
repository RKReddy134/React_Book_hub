const Element = () => {
  return (
    <div className="container">
      <h1 className="heading">Super Over League</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="log-image"
      ></img>
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="log-image"
      ></img>
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById("root"));
