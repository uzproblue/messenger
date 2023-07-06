"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import React, { use } from "react";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users = [] }) => {
  const clicedUsers = users.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative h-11 w-11">
      {clicedUsers.map((user, i) => (
        <div
          key={user.id}
          className={`
        absolute 
        inline-block 
        rounded-full 
        overflow-hidden 
        h-[21px] 
        w-[21px]
        ${positionMap[i as keyof typeof positionMap]}
        `}
        >
          <Image
            src={user?.image || "/images/placeholder.jpg"}
            alt="Avatar"
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
