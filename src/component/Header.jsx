import react from "react";

const Header = (props) => {
  return (
    <>
      <div className="colom">
        <h1>{props.heading}</h1>
      </div>
    </>
  );
};

export default Header;
