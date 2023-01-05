const Box = (props) => {
  //  Write your code here.
  const { sizeName, style } = props;
  return <div className={style}>{sizeName}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box sizeName="small" style="small" />
      <Box sizeName="medium" style="medium" />
      <Box sizeName="large" style="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
