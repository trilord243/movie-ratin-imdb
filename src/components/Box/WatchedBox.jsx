/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Summary } from './Summary';
import { WatchedList } from './WatchedList';


export const WatchedBox = ({ tempWatchedData }) => {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <Summary watched={watched} />
                    <WatchedList watched={watched} />




                </>
            )}
        </div>
    )
}
