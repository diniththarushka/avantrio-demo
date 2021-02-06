import React, {Component} from 'react';
import SideNav from "./SideNav/SideNav";

import ContentArea from "./ContentArea/ContentArea";

/**
 * Dashboard Component as the redirection point after successful Authentication
 */
class Dashboard extends Component {
    render() {
        return (
            <div>
                <SideNav/>
                <ContentArea/>
            </div>
        );
    }
}

export default Dashboard;
