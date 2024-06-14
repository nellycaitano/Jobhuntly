import React from 'react'
import CategoryHeader from '../globals/CategoryHeader'
import LatestJobs from './Leatestjobs';


const jobs = [
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
  { name:"Social Media Assistant", subtitle1: "Nomad", subtitle2: "Paris, France" },
];

const LeatestSection = () => {
  return (
    <>
      <section className="w-full h-auto lastsection md:px-[124px] md:py-[44px] flex md:items-center md:justify-center ">
        <section className="">
        <CategoryHeader 
          textBeforeSpan="Latest" 
          spanText="jobs open" 
          // showAllJobsLink="/all-jobs" 
          />
          <div className="grid grid-cols-2 grid-rows-4 gap-8 mt-12">
          {jobs.map((job, index) => (
              <LatestJobs key={index} name={job.name} subtitle1={job.subtitle1} subtitle2={job.subtitle2} />
            ))}  
          </div>
        </section>
      </section>
      
    </>
  )
}

export default LeatestSection
