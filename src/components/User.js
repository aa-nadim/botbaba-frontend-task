import React from 'react';

const User = (props) => {
    // console.log(props);
    const { id, first_name, last_name, email, avatar } = props.user;
    return (
        <div className="col-4 mt-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={avatar} className="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{first_name} {last_name}</h5>
                <p className ="card-text">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default User;