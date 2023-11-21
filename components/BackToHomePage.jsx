import React from "react";
import Link from "next/link";

const BackToHomePage = () => {
  return (
    <Link
      href="/"
      className="py-7 px-5 border rounded-full absolute top-5 right-5"
    >
      GO BACK TO HOME PAGE
    </Link>
  );
};

export default BackToHomePage;
