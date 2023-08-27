import React, { useState, useEffect } from 'react';

//UseEffect hook is used to make any manipulation on the page after when the render function awakes.

const getData = () => {    //Retrieving the saved data from local storage.
    const data = localStorage.getItem("count");
    if (data) return JSON.parse(data);
    else return 0;
}

function Effect() {    //Main function
    const [cnt, setCnt] = useState(getData());    // counter using useState

    useEffect(() => {       //Saving the value of count on local storage
        localStorage.setItem("count", JSON.stringify(cnt));
    }, [cnt])       //[cnt] means that the effect will take place only when any event occurs on cnt.

    useEffect(() => {
        document.title = `Button clicked ${cnt} times`
    })
    return (
        <div>    {/* Inner styling of the HTML elements*/}
            <button style={{ padding: '1rem 2rem', margin:'1rem auto'}} onClick={() => { setCnt(cnt + 1) }}>Count {cnt}</button>
        </div>
    )
}

export default Effect;  