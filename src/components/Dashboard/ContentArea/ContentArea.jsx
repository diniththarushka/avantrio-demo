import React, {Component} from 'react';
import "./content-area.styles.css"
import Users from "./sub_components/Users/Users";
import LiveMap from "./sub_components/LiveMap/LiveMap";
import History from "./sub_components/History/History";

import SOSAlert from "./assets/Capture.png";

/**
 * Content Area
 * Class Component
 * Used for presenting User information, Map and History for specified user.
 */
class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sos: false,
        }
    }

    onClickMessageBtn = () => {
        let sosBtn = document.getElementById('sos-btn');

        !this.state.sos ?
            sosBtn.classList.add('ripple')
            :
            sosBtn.classList.remove('ripple')
        this.setState({sos: !this.state.sos});
    }

    render() {
        return (
            <div className="content-area p-4">
                <div className="row">
                    <p className="heading bold col-md-2 pt-3">
                        <span className="align-middle pl-5">Monitor</span>
                    </p>
                    <div className="col-md-10">
                        <div className="sos-container float-right row justify-content-center">
                            <div className="pt-1 mr-4">
                                {
                                    !this.state.sos ?
                                        <button onClick={() => this.onClickMessageBtn()} className="mt-3 msg-btn bold">
                                            Message
                                        </button> : <div>
                                        <span className="sos-btn-alert">
                                            <img alt={"SOS"} src={SOSAlert} height={30}/>
                                        </span>
                                            <button onClick={this.onClickMessageBtn}
                                                    className="mt-3 msg-btn-active bold">
                                                Message
                                            </button>
                                        </div>
                                }
                            </div>
                            <div id="sos-btn" className="sos-btn bold">SOS</div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="p-3 row contents">
                    <div className="col-md-4 full-height">
                        <Users/>
                    </div>
                    <div className="col-md-8 full-height">
                        <LiveMap/>
                        <History/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentArea;
