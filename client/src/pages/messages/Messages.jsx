import React from 'react';
import { Link } from 'react-router-dom';
import './Messages.scss';

function Messages() {
  
  const currentUser = {
    id: 1,
    username: 'Anna Bell',
    isSeller: true
  }

  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio recusandae. Minima quo sunt, laudantium consequatur voluptatum dolor culpa ullam unde necessitatibus itaque autem magnam, officiis fugit veritatis! Est, voluptatum!';

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>Jonh Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>Jonh Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Jonh Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Jonh Doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages;