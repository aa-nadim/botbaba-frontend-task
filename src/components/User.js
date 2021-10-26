import React from 'react';

const User = (props) => {
    const { first_name, last_name, email, avatar } = props.user;
    return (
        <div className="col-6 mt-3">
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