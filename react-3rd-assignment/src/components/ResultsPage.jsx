import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RestaurantSection from "../common/Restaurant";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location");
  const selectedRestaurant = queryParams.get("restaurant");

 
  useEffect(() => {
    if (!selectedLocation || !selectedRestaurant) {
      navigate("/");
    }
  }, [selectedLocation, selectedRestaurant, navigate]);

  return (
    <>
    <div>
      <RestaurantSection />
    </div>
    </>
  );
};

export default ResultsPage;

