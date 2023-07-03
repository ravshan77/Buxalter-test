import React from 'react'

export const Hosting = () => {
  return (
    <div>
        <div class="h-screen flex items-center justify-center">
          <card class="w-72 rounded-lg border shadow-md flex flex-col p-5 bg-white">

            {/* <!-- Top Section --> */}
            <div class="flex flex-col items-center">

                {/* <!-- Quota Name and Details --> */}
                <p class="mt-10 text-2xl font-light text-gray-700"> Standard </p>
                <p class="mt-1 text-3xl font-light text-gray-700"> 200 GB </p>

                {/* <!-- Button --> */}
                <button class="mt-10 rounded py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-50 text-sm">
                IDR 43,000 / month
                </button>

                {/* <!-- Additional Offer --> */}
                <p class="mt-4 text-gray-700 text-sm font-light"> Or prepay anually </p>
                <p class="text-gray-800 text-sm font-light"> (save 17%): </p>
                <p class="mt-4 text-sm text-blue-600"> IDR 430,000 / month </p>

                {/* <!-- Line --> */}
                <div class="h-0.5 bg-gray-200 w-full my-5"> </div>

            </div>

            {/* <!-- Bottom Section --> */}
            <div class="flex flex-col px-3">

                <p class="text-gray-700 text-sm font-light"> Google One includes </p>

                <div class="grid grid-cols-5 mt-3 gap-y-2">

                {/* <!-- Details 1 --> */}
                <div class="pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="col-span-4 text-sm font-light text-gray-700">
                    200 GB storage
                </div>

                {/* <!-- Details 2 --> */}
                <div class="pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="col-span-4 text-sm font-light text-gray-700">
                    Access to Google experts
                </div>

                {/* <!-- Details 3 --> */}
                <div class="pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="col-span-4 text-sm font-light text-gray-700">
                    Share with up to 5 others
                </div>

                {/* <!-- Details 4 --> */}
                <div class="pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#2563eb" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div class="col-span-4 text-sm font-light text-gray-700">
                    Extra member benefits
                </div>

                </div>

            </div>

          </card>
        </div>
    </div>
  )
}

export default Hosting