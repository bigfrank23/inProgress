import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '../Button/Button';

export default () => (
  <Popup trigger={<button style={{padding: "15px", borderRadius: "30px", background: "transparent", border: '1px solid #232e32', cursor: "pointer"}}> Full Detail</button>} position="right center">
    <div>
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus iusto quidem minus repellendus, consequuntur officiis quibusdam. Molestiae animi quod cupiditate illo quaerat explicabo distinctio earum dicta nobis hic, suscipit error doloremque possimus maiores temporibus asperiores, consequatur placeat. Cupiditate pariatur reprehenderit cumque sunt quae, animi autem adipisci nulla aperiam et.
    </div>
  </Popup>
);