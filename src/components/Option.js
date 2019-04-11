import React from 'react';
const Option = (props) => (
      <div>
        <p>Option: {props.optionText}</p>
        <button 
          onClick={()=>{
            props.handleDeleteOption(props.optionText)
          }}
        >
          Remove
        </button>
      </div>
      );
  
  export default Option;