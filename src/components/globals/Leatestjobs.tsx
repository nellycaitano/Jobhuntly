import React from 'react'

 interface LatestJobsProps {
    name: string,
    subtitle1: string,
    subtitle2:string,
} 

const LatestJobs:React.FC<LatestJobsProps> = ( {name,subtitle1,subtitle2} ) => {
  return (
    <> 
       <div className="w-[580px] h-[149px] bg-white py-6 flex items-start space-x-6">L
        <div className="ml-[40px]">
            <img src="../src/assets/images/Company-Logo.png" alt="" className="" />
        </div>
        <div className="flex flex-col space-y-2">
            <p className="font-semibold text-[20px] text-title "> {name} </p>
            <div className="flex flex-col items-start mt-4">
                <p className="text-base text-light">    
                    {subtitle1} 
                    <span className=" inline-block w-1 h-1 rounded-full bg-[#515B6F] ml-2 mr-2"></span>
                    {subtitle2} 
                </p>
            </div>

            <div className="flex mt-4 space-x-2">            
                <button className="text-sm rounded-[80px] px-[10px] py-[6px] bg-greenlight text-green font-semibold">
                    Full-Time
                </button>
                
                <div className="flex items-center space-x-2">
                    <span className="mx-2 border-l h-[34px] border-light"></span> 
                    <button className= "rounded-[80px] px-[10px] py-[6px] font-semibold text-sm text-yellow border border-yellow hover:border-none hover:bg-yellowlight">
                        Marketing
                    </button>   
                    <button className= "rounded-[80px] px-[10px] py-[6px] font-semibold text-sm text-primary border border-primary  hover:border-none hover:bg-primarylight">
                        Design
                    </button>  
                     
                </div>
                      
            </div> 
        </div>     
       </div>
    </>
  )
}

export default LatestJobs
