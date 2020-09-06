import React, { useState, useEffect } from 'react'; 

const Comments = (props) => {

    const {name, email, body} = props.commentsData;   
    
    //random color generator 
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
    return(
        <>
            <img src={`https://ui-avatars.com/api/?name=${name}&background=${getRandomColor()}`}/>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Body : {body}</p>
        </>
    )
}

export default Comments