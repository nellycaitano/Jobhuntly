import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface CategoryHeaderProps {
  textBeforeSpan: string;
  spanText: string;
//   showAllJobsLink: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ textBeforeSpan, spanText }) => {
  return (
    <div className="flex items-center justify-between ">
      <h3 className="md:text-5xl text-[32px] text-semibold"> {textBeforeSpan} <span className="text-accent-blue">{spanText}</span></h3>
      <div className="flex items-center">
        {/* <p className="text-primary"><a href={showAllJobsLink}>Show all jobs</a> </p> */}
        <p className="text-primary">Show all jobs </p>
        
        <Icon icon="formkit:arrowright" style={{ color: '#4640DE' }} className='ml-2' />
      </div>
    </div>
  );
}

export default CategoryHeader;
