import React from 'react';


const Message = (props:any) => {
    if (props.isLogged){
        return(
        <div style={{display: 'flex', justifyContent: 'center'}} className="text-black z-10 max-w-5xl w-full items-center justify-between font-mono font-bold text-lg lg:flex">
            <p style={{backgroundColor: "#252422"}} className=" text-white rounded-md p-4 ">
                Logged in as {props.name}
            </p>
        </div>
        )
    }
    else{
    return(
        <div style={{display: 'flex', justifyContent: 'center'}} className="text-black z-10 max-w-5xl w-full items-center justify-between font-mono font-bold text-lg lg:flex">
            <p style={{backgroundColor: "#252422"}} className=" text-white rounded-md p-4 ">
            Not logged in
            </p>
        </div>
        )
    }
}

export default Message;
