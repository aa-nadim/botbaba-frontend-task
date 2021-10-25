import React from 'react';
import { useEffect, useState } from 'react';
import User from './User';
import axios from 'axios'
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

const URL = "https://reqres.in/api/users/";

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        await axios.get(URL).then((response) => {
            setUsers(response.data.data);
        });
    };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="row">
            <div className="container col-8">
                <h1>Read ALL Users</h1>
                <div className="row">
                    {users.length && users.map(user => <User user={user}></User>)}
                </div>
            </div>
            <div className="col-4">
                <div className="container">
                    <h1>Create a User</h1>
                    <CreateUser />
                </div>
                <div className="container">
                    <h1>Update a User</h1>
                    <UpdateUser />
                </div>
                <div className="container">
                    <h1>Delete a User</h1>
                    <DeleteUser />
                </div>
                
            </div>
        </div>
    );
};

export default Users;