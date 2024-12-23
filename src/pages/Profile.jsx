import { useContext } from "react"
import { AuthContext } from "../context"
import Avatar from "react-avatar"

function Profile() {
  const {users, isLoader} = useContext(AuthContext)



  return (
    <>
   {
    isLoader ? <span className="loading loading-bars loading-lg h-screen mx-auto text-center"> </span> :   <div className="flex items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <div className="max-w-md p-10 bg-white dark:bg-black rounded-lg shadow-lg">

        <Avatar
              name={users?.displayName}
              size="128"
              round={true}
              className="mx-auto border border-purple-500 border-spacing-2"
            />
      <h1 className="mb-4 text-4xl font-extrabold text-gray-800 dark:text-white">
      {users?.displayName}
      </h1>
      <p className="mb-4 text-lg text-gray-600 dark:text-white">
        I am a <span className="text-blue-500">Web Developer</span> & <span className="text-pink-500">Designer</span>.
      </p>
        
      <a
        href="#projects"
        className="px-6 py-2 text-white transition-all bg-purple-600 rounded-lg shadow-md hover:bg-purple-700"
      >
        Explore My Work
      </a>
    </div>
  </div>


   }
    </>
  )
}

export default Profile


