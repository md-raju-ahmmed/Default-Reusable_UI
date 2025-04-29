import React from "react";

const Card = ({name,email}) => {
  return (
    <div className="flex items-center justify-between  card w-96 bg-base-100 card-xs shadow-sm">
      <div className="card-body">
        <p>
          Username:-{name}
        </p>
        <p>
          Email:-{email}

        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
