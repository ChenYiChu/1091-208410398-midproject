import React from "react";
import Card from "./Card_98";

const CardList = ({ demo }) => {
  return (
    <div>
      {demo.map((user, i) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

export default CardList;
