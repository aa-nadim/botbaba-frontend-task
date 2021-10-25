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
                alert("Post deleted!");
                setUser(null);
            });
    }
    console.log(user);
    return (
        <div>
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
            <button onClick={deleteUser}>Delete User</button>
        </div>
    );
};

export default DeleteUser;