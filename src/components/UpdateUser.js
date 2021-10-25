import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const URL = "https://reqres.in/api/users";

const UpdateUser = () => {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setUserData(data);
    }
    function updateUser() {
        axios.put(`${URL}/2`, userData)
            .then((response) => {
                setUser(response.data);
            });
    }
    // console.log(user);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Abdul Awal Nadim" {...register("name")} placeholder='write your name' />
                <input defaultValue="nadim.ice.nstu@gmail.com" {...register("email")} placeholder='write your email' />
                <input defaultValue="https://avatars.githubusercontent.com/u/72213356?v=4"  {...register("imgURL")} placeholder="put your image's Url" />
                <input type="submit" />
            </form>
            <button onClick={updateUser}>Update User</button>
            <div>
                {
                    user && <>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={user.imgURL} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default UpdateUser;