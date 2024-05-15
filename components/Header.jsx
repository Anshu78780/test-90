import React from 'react';
import './Header.css';

function Header() {

    const handleUserButtonClick = () => {
       
        window.location.href = 'https://nivashbaba-login.vercel.app/';
    };

    return (
        <div className="how-section1">
            <div className="row">
                <div className="col-md-6 how-img">
                    <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" className="rounded-circle img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                    <h2>Find rewarding projects</h2>
                    <p className="text-muted">
                        Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                        Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                        More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.
                    </p>
                    <div className="buttons-container">
                       
                        <button className="btn user-btn" onClick={handleUserButtonClick}>User</button>
                        <button className="btn admin-btn">Admin</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
