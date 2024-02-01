import { useNavigate } from "react-router-dom";

function DeniedPage() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        403
      </h1>
      <div className="bg-black text-white px-2 rounded text-sm rotate-12 absolute">
        Access Denied
      </div>
      <button onClick={() => navigate(-1)} className="mt-5">
        <span className="relative block py-3 px-8 bg-[#1A2238] border border-current">
          Go back 
        </span>
      </button>
    </main>
  )
}

export default DeniedPage;