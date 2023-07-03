import React from "react";
import { useParams } from "react-router-dom";

export const Site = ({ page }) => {
  const { id } = useParams();

  return (
    <div>
       <div class="flex flex-col items-center justify-center  p-10 text-gray-700 bg-gray-100 md:p-20">
	     <h2 class="text-2xl font-medium">Jedi Order Membership</h2>

        {/* <!-- Component Start --> */}
        <div class="flex flex-wrap items-center justify-center w-full mt-4">
            <div class="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
                <div class="flex flex-col items-center p-10 bg-gray-200">
                    <span class="font-semibold">Padawan</span>
                    <div class="flex items-center">
                        <span class="text-3xl">$</span>
                        <span class="text-5xl font-bold">20</span>
                        <span class="text-2xl text-gray-500">/mo</span>
                    </div>
                </div>
                <div class="p-10">
                    <ul>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Lightsaber</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Robe</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Insurance</span>
                        </li>
                    </ul>
                </div>
                <div class="flex px-10 pb-10 justfy-center">
                    <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Join now</button>
                </div>
            </div>

            {/* <!-- Tile 2 --> */}
            <div class="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
                <div class="flex flex-col items-center p-10 bg-gray-200">
                    <span class="font-semibold">Jedi Knight</span>
                    <div class="flex items-center">
                        <span class="text-3xl">$</span>
                        <span class="text-6xl font-bold">50</span>
                        <span class="text-2xl text-gray-500">/mo</span>
                    </div>
                </div>
                <div class="p-10">
                    <ul>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2 italic">Padawan +</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Solo missions</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Utility belt</span>
                        </li>
                    </ul>
                </div>
                <div class="flex px-10 pb-10 justfy-center">
                    <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Join now</button>
                </div>
            </div>

            {/* <!-- Tile 3 --> */}
            <div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
                <div class="flex flex-col items-center p-10 bg-gray-200">
                    <span class="font-semibold">Jedi Master</span>
                    <div class="flex items-center">
                        <span class="text-3xl">$</span>
                        <span class="text-5xl font-bold">99</span>
                        <span class="text-2xl text-gray-500">/mo</span>
                    </div>
                </div>
                <div class="p-10">
                    <ul>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2 italic">Jedi Knight +</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Sit on council</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2">Stock options</span>
                        </li>
                    </ul>
                </div>
                <div class="flex px-10 pb-10 justfy-center">
                    <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Join now</button>
                </div>
            </div>
        </div>
	    {/* <!-- Component End  --> */}

</div>
    </div>
  );
};

export default Site;
