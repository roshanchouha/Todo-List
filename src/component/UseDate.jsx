import React, { useEffect, useState } from 'react';
 
const UseDate = () => {
    const locale = 'en';
    const today = new Date();
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const sec = today.getSeconds();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    // const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, second: 'numeric', minute: 'numeric' });
    const [time, setCount] = useState(0);

    useEffect(() => {

        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true,   minute: 'numeric',second: 'numeric', }));
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [time]);
    return (
        <>
            <div className="greetings-container">
                <div>
                    <h5
                     className='w-100'>
                        {date}  
                        ({time})
                    </h5>
                </div>
            </div>
        </>
    );
}

export default UseDate;
