import React, { useReducer } from 'react'

 function ManageForm() {
    function reducer (state , action) {
        switch (action.type) {
            case 'setName':
                return{...state, name: action.payload};

            case 'setEmail':
                return{...state, email: action.payload};
        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {name: "", email: ""})
    const handleClick = () => {
        console.log("Ho ten :", state.name);
        console.log("Email :", state.email );
        
    }


  return (
    <div style={{lineHeight:"50px"}}>
        <label>Ho ten : </label>
        <input type="text" onChange={(e) => dispatch({type: 'setName', payload: e.target.value})} />

        <br />

        <label>Email: </label>
        <input type="email" onChange={(e) => dispatch({type: 'setEmail', payload: e.target.value})} />

        <br />

        <button onClick={handleClick}>Gui</button>
    </div>
  )
}
export default ManageForm;