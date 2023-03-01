import * as React from 'react';
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export function EditWeapon() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [weapon, setWeapon] = useState({
        name: "",
        color: "",
        dmg: "",
    });
    const {name, color, dmg} = weapon;
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/weapons/edit/${id}`, weapon);
        navigate("/");
    };

    useEffect(() => {
        loadWeapon();
    }, []);

    const loadWeapon = async () => {
        const result = await axios.get(`http://localhost:8081/weapons/${id}`);
        setWeapon(result.data);
    };

    const onInputChange = (e) => {
        setWeapon({...weapon, [e.target.name]: e.target.value});
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Weapon</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="color" className="form-label">
                                Color
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter color"
                                name="color"
                                value={color}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dmg" className="form-label">
                                Damage
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Dps"
                                name="dmg"
                                value={dmg}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
