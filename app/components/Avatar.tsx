"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.png"
      alt="Avatar"
      width="30"
      height="30"
    />
  );
};

export default Avatar;
