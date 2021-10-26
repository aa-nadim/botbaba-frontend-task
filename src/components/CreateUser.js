import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const URL = "https://reqres.in/api/users/";

const CreateUser = () => {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState(null);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        setUserData(data);
    }
    function createUser() {
        axios.post(URL, userData)
            .then((response) => {
                alert("Create a User!");
                setUser(response.data);
            });
    }
    return (
        <div className="row  mt-4">
            <div className="col-4">
                {
                    user ? <>
                        <div className="h-75">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={user.imgURL} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </>:
                    <>
                        <p className="text-danger">If you click the "submit" and "Create User" button, you will see the new User.</p>
                    </>
                }
            </div>
            <div className="col-7 ml-3">
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-12 row mb-3">
                        <p className="">Name</p>
                        <input className="col-12" defaultValue="Abdul Awal Nadim" {...register("name")} placeholder='write your name' />
                    </div>
                    <div className="col-12 row mb-3">
                        <p>Email</p>
                        <input className="col-12" defaultValue="nadim.ice.nstu@gmail.com" {...register("email")} placeholder='write your email' />
                    </div>
                    <div className="col-12 row mb-3">
                        <p>Image URL</p>
                        <input className="col-12 h-4" defaultValue="https://avatars.githubusercontent.com/u/72213356?v=4"  {...register("imgURL")} placeholder="put your image's Url" />
                    </div>
                    <div className="col-12 row">
                        <input className="col-12 bg-success text-light" type="submit" />
                    </div>
                </form>
            </div>
            <div className="col-12 mt-2">
                <p className="text-warning">To show new user. Please click the "Create User" button....</p>
                <button className="col-12 text-light bg-warning" onClick={createUser}>Create User</button>
            </div>
        </div>
    );
};

export default CreateUser;