import React from 'react'
import { useState } from 'react';

 function UserForm() {
    const [userInfo , setUserInfo] = useState({
        name : '',
        email: '',
        age : '',
    });
    
    const handleInput = (e) => {
        const {name , value} = e.target;
        setUserInfo(() => ({
            ...userInfo,
            [name]: value
        }));
        

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);

    }
    
    

  return (

    <div>
        <h1>Thong tin nguoi dung</h1>
        <form  onSubmit={handleSubmit}>
        <label>Ho va ten</label>
        <br />
        <input type="text" placeholder='Nhap ho ten' value={userInfo.name} onChange={handleInput} name='name' />
        <br />

        <label>Email</label>
        <br />
        <input type="email" placeholder='Nhap email' value={userInfo.email} onChange={handleInput} name='email' />
        <br />

        <label>Tuoi</label>
        <br />
        <input type="number" placeholder='Nhap tuoi' value={userInfo.age} onChange={handleInput} name='age' />
        <br />

        <input type="submit" value="Gui" />
        </form>
    </div>
  )
}
export default UserForm;