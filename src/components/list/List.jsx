import React from 'react'
const List = ({list}) => {
  return (
    <>
        <div key={list.id} className="birthday-user-list">
            <div className="user-img">
              <img src={list.image} alt="img" />
            </div>
            <div className="user-list-content">
              <h5>{list.titile}</h5>
              <p>{list.subTitle} Years</p>
            </div>
          </div>
    </>
  )
}

export default List