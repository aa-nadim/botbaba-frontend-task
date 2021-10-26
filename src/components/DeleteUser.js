import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

const URL = "https://reqres.in/api/users";

const DeleteUser = () => {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        await axios.get(`${URL}/2`).then((response) => {
            setUser(response.data.data);
        });
    };
    useEffect(() => {
        getUser();
    }, []);

    function deleteUser() {
        axios.put(`${URL}/2`)
            .then((response) => {
                alert("User deleted!");
                setUser(null);
            });
    }
    console.log(user);
    return (
        <div className="row  mt-2">
            <div className="col-12">
            {
                user && <>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={user.avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                </>
            }
            <div className="col-12 mt-2">
                <p className="text-warning">To delete user. Please click the "Delete User" button....</p>
                <button className="col-12 bg-danger text-light" onClick={deleteUser}>Delete User</button>
            </div>
        </div>
        </div>
    );
};

export default DeleteUser;