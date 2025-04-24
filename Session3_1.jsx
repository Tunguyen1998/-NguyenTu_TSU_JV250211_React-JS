import React from 'react'
import "./Session3_1.css"
import ListStudent from './ListStudent'
import FormStudent from './FormStudent'
import ControllButton from './ControllButton'

export default function Session3_1() {

  return (
    <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        <ControllButton></ControllButton>
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
        <ListStudent></ListStudent>
        {/* END LIST STUDENT */}
      </div>
    </div>
    {/* START FORM SINH VIEN */}
    <FormStudent></FormStudent>
    {/* END FORM SINH VIÊN */}
  </div>
  )
}
