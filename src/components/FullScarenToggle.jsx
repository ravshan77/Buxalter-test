import React, { useState } from 'react';
export default function FullScarenToggle() {
const [fullScreen, setFullScreen] = useState(false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    setFullScreen(false);
    document.documentElement.requestFullscreen();
} else if (document.exitFullscreen) {
    setFullScreen(true);
    document.exitFullscreen();
  }
}

  return (
    <div>
      <input type="checkbox" name="light-full" id="light-full" className="light-switch sr-only" checked={fullScreen} onChange={toggleFullScreen} />
      <label className="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full" htmlFor="light-full" >
        {fullScreen ? <svg className="w-4 h-4" width="16" height="16" fill='none' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" fill='rgb(129, 128, 128)'></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" fill='rgb(129, 128, 128)' stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
            </g>
         </svg>
       : <svg className="w-4 h-4 " width="16" height="16" fill='none' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" fill='rgb(129, 128, 128)'></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" fill='rgb(129, 128, 128)' stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier" > 
              <path d="M9.99756 6.00065C9.98309 7.70722 9.88834 8.64801 9.26793 9.26842C8.64752 9.88883 7.70673 9.98358 6.00017 9.99805" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M9.99756 17.9974C9.98309 16.2908 9.88834 15.35 9.26793 14.7296C8.64752 14.1092 7.70673 14.0145 6.00017 14" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M14 6.00065C14.0145 7.70722 14.1092 8.64801 14.7296 9.26842C15.35 9.88883 16.2908 9.98358 17.9974 9.99805" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M14 17.9974C14.0145 16.2908 14.1092 15.35 14.7296 14.7296C15.35 14.1092 16.2908 14.0145 17.9974 14" stroke="rgb(129, 128, 128)" stroke-width="1.5" stroke-linecap="round"></path> 
              <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"></path> 
              </g>
        </svg>}
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
