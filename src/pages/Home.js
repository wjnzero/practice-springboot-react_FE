import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default function Home() {

    const [weapons, setWeapons] = useState([]);


    useEffect(() => {
        loadWeapon()
    }, []);


    const loadWeapon = async () => {
        const result = await axios.get("http://localhost:8081/weapons");
        setWeapons(result.data);
    };

    const deleteWeapon = async (id) => {
        await axios.delete(`http://localhost:8081/weapons/delete/${id}`);
        loadWeapon();
    };
    return (
        <div className="container">
            <div className="py-4">
                <table className="table border">
                    <thead>
                    <tr>
                        <th scope="col">lor</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Damage</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        weapons.map((weapon, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{weapon.name}</td>
                                <td>{weapon.color}</td>
                                <td>{weapon.dmg}</td>
                                <td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/weapons/${weapon.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteWeapon(weapon.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );

}

