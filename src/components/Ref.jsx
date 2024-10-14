import { useRef, useEffect } from "react";

const Ref= () => {

    // useRef doenst re-render the app
    // useful to get a hold on DOM Elements
   
    const inputRef = useRef(null);

    const handleClick = () => {
       // **in this case a change on the input wont cause the app to re-render
       inputRef.current.focus();
       inputRef.current.style.backgroundColor = 'red';
    }

    useEffect(()=>{
        console.log(inputRef);
    })

    return(
        <div className="ref">
            <button onClick={handleClick}>Click Me!</button>
            <input ref={inputRef} type="text" />
        </div>
    )
}


export default Ref;

