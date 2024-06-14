
interface CardTeamProps {
    name: string;
    job: string;
    image: string;
  }
function CardTeam(props: CardTeamProps) {
    const {name, job, image} = props;

    return (
        <div className="flex items-center flex-col py-6 gap-4 sm:h-[243px] sm:w-[225px] h-[243px] w-[212px] border border-[#D6DDEB] rounded  ">
                    <div className="rounded-full bg-slate-500 size-20 ">
                        <img src={ image } className=""/>
                    </div>
                    <div className="w-full text-center">
                        <p className="text-[18px] text-[#25324B] font-sans font-semibold "> { name } </p>
                        <p className="text-[16px] text-[#7C8493] font-sans font-normal"> { job } </p>
                    </div>
                    <div className="flex items-center justify-center w-full gap-x-3">
                        <span className="">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5" clip-path="url(#clip0_3541_20804)">
                                <path d="M16.3999 4H8.3999C6.19076 4 4.3999 5.79086 4.3999 8V16C4.3999 18.2091 6.19076 20 8.3999 20H16.3999C18.609 20 20.3999 18.2091 20.3999 16V8C20.3999 5.79086 18.609 4 16.3999 4Z" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3999 15C14.0568 15 15.3999 13.6569 15.3999 12C15.3999 10.3431 14.0568 9 12.3999 9C10.743 9 9.3999 10.3431 9.3999 12C9.3999 13.6569 10.743 15 12.3999 15Z" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.8999 7.5V7.501" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3541_20804">
                                <rect width="24" height="24" fill="white" transform="translate(0.399902)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clip-path="url(#clip0_3541_20809)">
                            <path d="M18.3999 4H6.3999C5.29533 4 4.3999 4.89543 4.3999 6V18C4.3999 19.1046 5.29533 20 6.3999 20H18.3999C19.5045 20 20.3999 19.1046 20.3999 18V6C20.3999 4.89543 19.5045 4 18.3999 4Z" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.3999 11V16" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.3999 8V8.01" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.3999 16V11" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3999 16V13C16.3999 12.4696 16.1892 11.9609 15.8141 11.5858C15.439 11.2107 14.9303 11 14.3999 11C13.8695 11 13.3608 11.2107 12.9857 11.5858C12.6106 11.9609 12.3999 12.4696 12.3999 13" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3541_20809">
                            <rect width="24" height="24" fill="white" transform="translate(0.399902)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span>
                    </div>
                </div>
    );
  }
  
  export default CardTeam;