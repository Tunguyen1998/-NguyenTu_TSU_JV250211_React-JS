import React from "react";

let Users = [
    {
    id : 1,
    userName : "Nguyen Van A",
    dob : "21/03/1961",
    gender : "Nam",
    address : "New York"
    },
    {
    id : 2,
    userName : "Tran Thi B",
    dob : "15/09/1975",
    gender : "Nu",
    address : "Ha Noi"
    }

];


function AccountList() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ho va ten</th>
            <th>Ngay sinh</th>
            <th>Gioi tinh</th>
            <th>Dia chi</th>
            <th>Thao tac</th>
          </tr>
        </thead>
        <tbody>
            {Users.map((person , index) => 
            <tr key={person.id}>
                <td>{index + 1}</td>
                <td>{person.userName}</td>
                <td>{person.dob}</td>
                <td>{person.gender}</td>
                <td>{person.address}</td>
                <td>
                    <button className="sua">Sua</button>
                    <button className="xoa">Xoa</button>
                </td>
                
            </tr>
            )}
            
        </tbody>
      </table>

    </div>
  );
}
export default AccountList;
