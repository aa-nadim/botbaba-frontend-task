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
            <div className="container col-5">
                <div className="bg-secondary">
                    <h1 className="text-light">Read ALL Users</h1>
                </div>
                <div className="row">
                    {users.length && users.map(user => <User user={user}></User>)}
                </div>
            </div>
            <div className="col-7">
                <div className="">
                    <div className="bg-secondary">
                        <h1 className="text-light">Create a User</h1>
                    </div>
                    <CreateUser />
                </div>
                <div className="mt-5">
                    <div className="bg-secondary">
                        <h1 className="text-light">Update a User</h1>
                    </div>

                    <UpdateUser />
                </div>
                <div className="my-5">
                    <div className="bg-secondary">
                        <h1 className="text-light">Delete a User</h1>
                    </div>
                    <DeleteUser />
                </div>

            </div>
        </div>
    );
};

export default Users;