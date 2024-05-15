import React from 'react';
import './Pfund.css';

function Pfund() {
    return (
      <>
       <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>
              <a href="#" className="action-icon">
                <i className="fa fa-pencil"></i>
              </a>
              <a href="#" className="action-icon">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>
              <a href="#" className="action-icon">
                <i className="fa fa-pencil"></i>
              </a>
              <a href="#" className="action-icon">
                <i className="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
      </>
    );
  }
  
  export default Pfund;
