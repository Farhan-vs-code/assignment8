import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold">Welcome</h1>
    </div>
  );
};

export default ResultsPage;

