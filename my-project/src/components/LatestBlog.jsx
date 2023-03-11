import hero from '../assets/Hero.png'
export default function LatestBlog() {
    return (
      <div>
      <div className="text-center py-9 px-7 bg-green-100">
       <div>
       <h2 className="text-3xl font-bold">Latest Blog</h2>
       </div>
       <div className="grid grid-cols-4 my-6 gap-3 overflow-x-auto"> 
       <div className="px-4 rounded-md py-4 bg-gray-200 w-60 h-96">
        <div>
            <img src={hero} alt="" />
        </div>


       </div>
       <div className="px-4 rounded-md py-4 bg-gray-200 w-60 h-96">
        <div>
            <img src={hero} alt="" />
        </div>


       </div>
       <div className="px-4 rounded-md py-4 bg-gray-200 w-60 h-96">
        <div>
            <img src={hero} alt="" />
        </div>


       </div>
       <div className="px-4 rounded-md py-4 bg-gray-200 w-60 h-96">
        <div>
            <img src={hero} alt="" />
        </div>


       </div>
       

       </div>

      </div>
      </div>
    )
  }