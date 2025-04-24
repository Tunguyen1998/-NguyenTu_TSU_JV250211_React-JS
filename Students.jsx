import React from "react";

export default function Students() {
      const Student =[
        {
          id: 1,
          studentCode: "SV001",
          studentName: "Nguyen Van A",
          age: 20,
          gender: "Nam"
        },
        {
          id: 2,
          studentCode: "SV002",
          studentName: "Nguyen Van B",
          age: 21,
          gender: "Nam"
    
        },
        {
          id: 3,
          studentCode: "SV003",
          studentName: "Nguyen Van C",
          age: 19,
          gender: "Nam"
    
        },
      ]
  return ( 
    <>
    {Student.map(item =>{
        return       <tr>
        <td>{item.id}</td>
        <td>{item.studentCode}</td>
        <td>{item.studentName}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
        <td>
          <div className="template-demo">
            <button type="button" className="btn btn-danger btn-icon-text">
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    })}
    </>
          

   
  );
}
