import React, { Component } from 'react'
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_root">
                <div className="footerWrapper">
                    <div className="links">
                        {/* links here */}
                    </div>
                    <div className="copyrightWrapper">
                        <p className="copyright">Copyright &copy; 2020 Slumlords R Us all rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}