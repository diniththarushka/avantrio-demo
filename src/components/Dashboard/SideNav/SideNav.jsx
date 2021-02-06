import React, {Component} from 'react'
import "./sidenav.styles.css";

/**
 * Pure CSS sidebar component with provided assets.
 */

export default class SideNav extends Component {
    render() {
        return (
            <div className="side-nav">
                <div className="side-nav-item btn-main"></div>
                <div className="side-nav-item btn-1"></div>
                <div className="side-nav-item btn-2"></div>
                <div className="side-nav-item btn-3"></div>
                <div className="side-nav-item btn-4"></div>
                <div className="side-nav-item btn-5"></div>
                <div className="side-nav-item btn-avatar"></div>
            </div>
        )
    }
}
