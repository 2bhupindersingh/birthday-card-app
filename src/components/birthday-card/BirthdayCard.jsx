import React, { useState } from "react";
import data from "../data";
import CardTitle from "./CardTitle";
import List from "../list/List";

const BirthdayCard = () => {
  const [user, setUser] = useState(data);
  const handleClearAll = () => {
    setUser([]);
  };
  return (
    <div className="birthday-card">
      <CardTitle userCount={user.length} title="Birthdays Today" />
      <div className="card-content">
        {user.map((list) => (
          // <div key={list.id} className="birthday-user-list">
          //   <div className="user-img">
          //     <img src={list.image} alt="img" />
          //   </div>
          //   <div className="user-list-content">
          //     <h5>{list.titile}</h5>
          //     <p>{list.subTitle} Years</p>
          //   </div>
          // </div>
          <List list={list} />
        ))}
      </div>
      {user.length > 0 ? (
        <button onClick={handleClearAll} className="clear-btn">
          Clear All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BirthdayCard;
