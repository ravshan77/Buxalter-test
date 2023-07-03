import React, { memo } from 'react';
import "./loading.css"

const Loading = () => {
    return (
        <div className="base-loading">
            <div className='loading-body'>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className='base'>
                    <span></span>
                    <div className='face'></div>
                </div>
            </div>
            <div className='longfazers'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>Loading</h1>
        </div>

    )
}

export default memo(Loading)