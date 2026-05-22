import React from 'react'

function Header() {
  return (
    <>
          <header className="flex h-16 items-center justify-between border-b border-[#ececec] bg-white px-6">
          <div className="flex items-center gap-10">
            <h1 className="text-[28px] font-bold tracking-tight">
              ticktock
            </h1>

            <p className="text-sm text-gray-500">
              Timesheets
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-700">
              John Doe
            </p>

            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </header>
    </>
  )
}

export default Header