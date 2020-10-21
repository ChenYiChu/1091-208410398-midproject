import React from "react";

const Card = ({ id, name }) => {
  return (
    <div className="bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5">
      <img src={require(`../images/${id}.PNG?size=200x200`)} alt="robot" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
