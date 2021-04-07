import React from "react";

interface ICreateBtnProps {}

const CreateBtn: React.FC<ICreateBtnProps> = (props) => {
  return (
    <div className="d-grid">
      <button className="btn btn-primary" type="button">
        new
      </button>
    </div>
  );
};

export default CreateBtn;
