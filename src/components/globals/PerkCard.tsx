import React from "react";

interface PerkCardProps {
    svg: React.ReactNode;
    titre: string;
    contenu: string;
  }
function PerkCard(props: PerkCardProps) {
    const {svg, titre, contenu} = props;

    return (
        <div className="sm:w-[280px] flex items-center flex-col gap-y-4 border-2">
            <div className="w-full ">{ svg }</div>
            <div className="flex flex-col items-center">
                <p className="w-full text-[20px] text-neutral-700 font-clashSemiBold ">{ titre }</p>
                <p className="w-full text-[16px] text-neutral-600 font-normal ">{ contenu }</p>
            </div>
        </div>
    );
  }
  
  export default PerkCard;