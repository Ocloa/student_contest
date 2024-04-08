import React from 'react';


const Message = (props:any) => {
    if (props.isLogged){
        return(
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p>
                Logged in as {props.name}
            </p>
        </div>
        )
    }
    else{
    return(
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p>
            Not logged in
            </p>
        </div>
        )
    }
}

export default Message;
