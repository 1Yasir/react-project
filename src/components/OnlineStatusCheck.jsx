import React from 'react';
import useOnlineStatus from '../customHook/onlineStatus';

const Button = () => {
    const isOnline = useOnlineStatus();

    return (
        <button disabled={!isOnline} className="btn btn-primary">IsDisabled</button>
    );
}

function OnlineStatusCheck() {
    const isOnline = useOnlineStatus();
    return (
        <div className="container">
            <p className='text-center my-5'><strong>Try turning your network on and off, and notice how this StatusBar updates in response to your actions.</strong></p>
            <h1>{isOnline ? "✅ Online" : "❌ Disabled"}</h1>
            <Button />
        </div>
    );
}

export default OnlineStatusCheck;
