import Image from "next/image";
import React from "react";

const LinkCard = ({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image?: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md  hover:scale-105 transition-all border bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full items-center">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>

        <h2 className="font-semibold w-full text-center text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
};

export default LinkCard;
