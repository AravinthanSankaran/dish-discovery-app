import React from "react";
import Image from "next/image";

function CategoriesCard({ name, image }) {
  return (
    <div>
      <div className="border w-[350px] rounded-lg">
        <div className="relative flex justify-center bg-[#f5f5f5] py-2">
          <Image src={image} alt={name} className="object-contain" />
        </div>
        <div className="space-y-2 px-3">
          <h2 className="text-base text-heading font-semibold pt-2 text-center">{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
