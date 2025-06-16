import { FaGithub, FaGoogle } from "react-icons/fa";
import swiming from "../../assets/swimming.png"
import clas from "../../assets/class.png"
import play from "../../assets/playground.png"
const RightNavbar = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium flex items-start mb-3 text-black">
        Login With
      </h1>
      <div className="flex gap-2 items-center border border-sky-500 p-2">
        <FaGoogle />
        <button>Login With Google</button>
      </div>
      <div className="flex gap-2 items-center border border-gray-900 p-2 mt-3">
        <FaGithub></FaGithub>
        <button>Login With Github</button>
      </div>
      <div>
        <h1 className="text-2xl font-medium flex items-start mt-10 mb-5 text-black">
          Find Us on
        </h1>
        <div className="flex flex-col gap-2">
          {/* Facebook */}
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
            Facebook
          </button>

          {/* X */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="X logo"
              width="16"
              height="12"
              viewBox="0 0 300 271"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
              />
            </svg>
            Twitter
          </button>

          {/* LinkedIn */}
          <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
            <svg
              aria-label="LinkedIn logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fillRule="evenodd"
              ></path>
            </svg>
            LinkedIn
          </button>


        </div>
      </div>
      
      <div className="bg-base-100 shadow-xl p-8">
        <h1 className="text-2xl font-medium flex items-start mt-10 mb-5 text-black">
          Q-Zone
        </h1>
        <img src={swiming} alt="" srcset="" />
        <img className="mt-8" src={clas} alt="" srcset="" />
        <img className="mt-8" src={play} alt="" srcset="" />
      </div>


        <div className="mt-20">
            <h1>Add Section</h1>
        </div>

    </div>
  );
};

export default RightNavbar;
