import React, {useState, useEffect} from 'react';
import "./users.styles.css";
import MoreIcon from './assets/Group 566.png';
import {authModule} from "../../../../Auth/PrivateRoute";
import axios from "axios";
import {getUserHistory} from "../../../../../global/actions/action"
import {useDispatch} from "react-redux"

function Users() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [colors] = useState([
        {c1: "#fac8d9", c2: "#fc78c3"},
        {c1: "#c8a7ed", c2: "#ae86cc"},
        {c1: "#befcff", c2: "#7da2f4"},
        {c1: "#c3ffeb", c2: "#61ffcf"}
    ]);

    function UpdateGlobalUsers(id) {
        axios.get(`http://apps.avantrio.xyz:8010/api/user/${id}/logs`, {
            headers: {Authorization: `Bearer ${authModule.token}`}
        }).then((res) => {
            dispatch(getUserHistory(id, res.data));
        }).catch((err) => {
            alert(err);
            return {};
        });
    }

    useEffect(() => {
        axios.get("http://apps.avantrio.xyz:8010/api/users", {
            headers: {Authorization: `Bearer ${authModule.token}`}
        }).then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            alert(`Error occurred: more information, ${err}`)
        });
    }, []);


    function getColor() {
        let number = Math.floor(Math.random() * (colors.length));
        return colors[number];
    }

    return (
        <div style={{height: '100%'}} className="container-fluid card border-0 shadow-sm">
            <div className="row">
                <div className="col-6 pt-3 pb-3 user-category bold active">STAFF</div>
                <div className="col-6 pt-3 pb-3 user-category bold">EMPLOYEE</div>
            </div>
            <div id={"users"} className="container mt-5">
                {users.length &&
                <div>
                    {
                        users.map((user, key) => {
                            let clr_pair = getColor();
                            return (
                                <div key={key} className="row p-2 m-2 user-record text-center">
                                <span className="col-lg-3">
                                   <div style={{background: `linear-gradient(-135deg,${clr_pair.c1},${clr_pair.c2})`}}
                                        className="user-avatar container">
                                       {user.name.charAt(0).toUpperCase()}
                                   </div>
                                </span>
                                    <span className="col-lg-8 text-lg-left pt-2 text-md-center">
                                    {user.name}
                                </span>
                                    <span className="col-lg-1 pl-3 pt-2 justify-content-center">
                                    <img style={{cursor: 'pointer'}} onClick={() => UpdateGlobalUsers(user.id)}
                                         src={MoreIcon} height={25} alt={"More"}/>
                                </span>
                                </div>
                            );
                        })
                    }
                </div>
                }
            </div>
        </div>
    );
}

export default Users;
