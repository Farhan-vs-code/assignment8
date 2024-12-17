import React from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Restaurant {id}
      </h1>
    </div>
  );
};

export default RestaurantDetail;