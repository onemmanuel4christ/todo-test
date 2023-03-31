import React from 'react'

export default function Progress() {
  return (
    <div className="w-full flex items-center justify-between my-5 flex-col md:flex-row">
      <div className="md:w-[200px] bg-[#19A7CE] p-2 relative w-full md:mb-2 mb-5 rounded-sm overflow-hidden">
        <div className="w-[50%] absolute bg-[#fddf47bf] top-0 bottom-0 left-0 right-0"></div>
        <p className="text-[#222] font-semibold z-30 text-center">
          1 of 2 tasks done
        </p>
      </div>
      <button className="md:w-[200px] w-full justify-between flex items-center gap-2 text-white bg-[#19A7CE] font-semibold p-2 rounded-sm">
        Remove checked{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
