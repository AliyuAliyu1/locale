import { Link } from "react-router-dom";
import { logo } from "../../assets/images"

export const SignUp = () => {
  return (
    <div className="h-screen flex relative pl-2 md:pl-0">
      <div className="w-1/3 bg-pry relative max-sm:hidden">
        <video
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
        <Link
          className="absolute top-2 left-2 mt-5 ml-7"
          to={"/"}
        >
          <h1 className="text-white text-lg mt-4 ml-4 font-serif">Locale</h1>
          {/* <img src={logo} alt="LOCALE" className="w-32" /> */}
        </Link>
      </div>
      <div className="md:w-2/3 text-center md:text-left bg-white flex flex-col
          justify-center px-14 md:pl-40 md:pt-28">
       <Link className="hidden max-sm:block custom-selection pl-24 mb-14" to={'/'}><img src={logo} alt="LOCALE" className="w-32"/></Link>

        <h1 className="text-md font-sans font-bold mb-4">Sign up to Locale</h1>
        <p className="text-sm font-extralight">Sign up an account with us today</p>
        <div className="py-12">
          <form action="" className="flex flex-col md:w-[60%] text-black mb-10">
            <label htmlFor="" className="text-xs font-semibold mb-1">Email:</label>
            <input
              type="text"
              placeholder="Please enter your email"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">Password:</label>
            <input
              type="password"
              placeholder="*******"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <button
              type="submit"
              className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                hover:text-black font-semibold mt-7 custom-selection"
            >
              Create Account
            </button>
            <p className="py-4 text-center font-light">
              Already have an account?
              <Link className="border-b border-transparent hover:border-blue-500 mx-2 font-semibold" to={'/login'}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
  </div>
  )
}
