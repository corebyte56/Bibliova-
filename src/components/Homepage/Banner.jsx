import { Button } from "@heroui/react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#FDE68A] to-[#FBBF24] text-center space-y-6">
      <h1 className="text-4xl font-bold text-[#412402]">Find Your New Read</h1>
      <p className="text-lg text-[#6B7280]">
        Discover your next favorite book with us. Explore our vast collection
        and find the perfect read for you.
      </p>
      <Button variant="primary" size="lg">
        Explore Now
      </Button>
    </div>
  );
};

export default Banner;
