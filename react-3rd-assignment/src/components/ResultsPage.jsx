import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RestaurantSection from "../common/Restaurant";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL থেকে লোকেশন এবং রেস্টুরেন্ট প্যারামিটার নেওয়া
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location");
  const selectedRestaurant = queryParams.get("restaurant");

  // লোকেশন এবং রেস্টুরেন্ট না থাকলে হোমপেজে রিডিরেক্ট করবে
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

