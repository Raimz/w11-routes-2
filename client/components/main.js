import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="flex justify-center border rounded font-semibold mb-2 p-2" id="title">Main</div>
            <div className="flex flex-col"> 
              <Link to="/dashboard/profile/9802c396-bed1-4b07-8167-995685a9f020">Go To Profile</Link>
              <Link to="/dashboard">Go To Root</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
