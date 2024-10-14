/* eslint-disable react/display-name */
import {useState} from "react";

//HOC
const withLoader = (WrapperComponent) => {

    return (props) => {
        const [loading, setLoading]  = useState(true);
        //simulate api fetch
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        return (
            <div>
                { loading ? 
                    <p>Loading ...</p> :
                    <WrapperComponent {...props} />
                }
            </div>
        )
       
    }
   
    
}

//withLoader.displayName = 'withLoader';
export default withLoader;