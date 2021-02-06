import React, {useState} from 'react';
import {useSelector, useStore, connect} from "react-redux";
import "./history.styles.css";
import FilterIcon from './assets/Group618.png';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function History() {
    const [user, setUser] = useState("");
    const [history_logs, setHistoryLogs] = useState({logs: []});
    const _history_records = useSelector(state => state.userHistoryReducer);
    const store = useStore();

    store.subscribe(() => {
        let user = _history_records.user;
        if (user) {
            setUser(user);
            setHistoryLogs(_history_records.logs);
        }
    })

    function showOnMap(lat, lng) {
        //console.log(lat,lng);
    }

    function formatTime(time) {
        let hourEnd = time.indexOf(":");
        let H = +time.substr(0, hourEnd);
        let h = H % 12 || 12;
        let ampm = (H < 12 || H === 24) ? "am" : "pm";
        time = h + " " + time.substr(hourEnd, 3) + " " + ampm;
        return time;
    }

    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, months[d.getMonth()], day].join(' / ');
    }

    return (
        <div className="history container-fluid card border-0 shadow-sm mt-2 p-2">
            <div className="row p-1 pt-3 pb-3 ml-2 mr-2">
                <div style={{width: '100%'}} className="row pl-5 ml-3 mr-3 bordered">
                    <p><span className="bold mr-2">History</span>({user ? user : "User"})</p>
                    <div className="vline ml-4"></div>
                    <div style={{width: '70%'}} className="row pl-3 pr-3 justify-content-between">
                        <div className="col-md text-center active bold active-bordered">All</div>
                        <div className="col-md text-center inactive">Location</div>
                        <div className="col-md text-center inactive">Message</div>
                        <div className="col-md text-center inactive">Alert</div>
                        <span className="text-right">
                                <img src={FilterIcon} height={'50%'} alt={"Filter"}/>
                            </span>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md text-center bold">Date</div>
                <div className="col-md text-center bold">Alert view</div>
                <div className="col-md text-center bold">Time</div>
                <div className="col-md text-center bold">Location</div>
            </div>
            <div className="records">
                {!history_logs.length &&
                <div className="alert alert-warning m-4">
                    Select a User to View Logs
                </div>
                }
                {history_logs.length && history_logs.map((log, key) => {
                    return (
                        <div className="row p-2 mt-2 table-record" key={key}>
                            <div className="col-md text-center">{formatDate(log.date)}</div>
                            <div className="col-md text-center">{log.alert_view ? "On" : "Off"}</div>
                            <div className="col-md text-center">{formatTime(log.time)}</div>
                            <div className="col-md text-center map-link">
                                <div onClick={() => {
                                    showOnMap(log.latitude, log.longitude)
                                }}>Live Map
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default connect(
    null,
    mapDispatchToProps,
)(History);
