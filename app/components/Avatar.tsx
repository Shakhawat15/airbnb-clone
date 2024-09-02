"use client";

import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  console.log("src", src);
  return (
    <Image
      className="rounded-full"
      src={src || "/images/placeholder.png"}
      alt="Avatar"
      width="30"
      height="30"
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default Avatar;
