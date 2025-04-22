import React from 'react'

const user = {
    Name: "Nguyen Van A",
    Gender: "Nam",
    Birthday: "06/03/2024",
    Email : "nva@gmail.com",
    Address: "Thanh Xuan, Ha Noi"
}

function UserInfo() {
  return (
    <div>
        <h1> Thong tin ca nhan</h1>
        <ul>
            <li>Ho va ten: <strong> {user.Name}</strong></li>
            <li>Gioi tinh: <strong> {user.Gender} </strong> </li>
            <li>Ngay sinh: <strong>{user.Birthday}</strong>  </li>
            <li>Email: <strong> {user.Email} </strong></li>
            <li>Dia chi: <strong>{user.Address} </strong></li>
        </ul>
    </div>
  )
};
export default UserInfo;
