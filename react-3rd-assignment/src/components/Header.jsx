import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState(""); // লোকেশন স্টেট
  const [restaurant, setRestaurant] = useState(""); // রেস্টুরেন্ট স্টেট
  const navigate = useNavigate();

  // লোকেশন এবং রেস্টুরেন্ট সিলেক্ট হলে রিডিরেক্ট করবে
  useEffect(() => {
    if (location && restaurant) {
      navigate(`/results?location=${location}&restaurant=${restaurant}`);
    }
  }, [location, restaurant, navigate]);

  return (
    <header className="flex justify-around items-center p-4">
     
      <div className="md:flex hidden text-2xl font-bold">
        <img src="logo.png" alt="" />
      </div>

    
      <div className="flex space-x-4">
        {/* লোকেশন ড্রপডাউন */}
        <select
          className="p-2  rounded border-[1px] border-[#ADADAD]"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">restaurant</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Singapore">Singapore</option>
          <option value="Toronto">Toronto</option>
          <option value="Paris">Paris</option>
        </select>

        {/* রেস্টুরেন্ট ড্রপডাউন */}
        <select
          className="p-2  rounded border-[1px] border-[#ADADAD]"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        >
          <option value="">location</option>
          <option value="Bella Italia">Bella Italia</option>
          <option value="Marafuku Ramen">Marafuku Ramen</option>
          <option value="Bottega">Bottega</option>
          <option value="Starbelly">Starbelly</option>
        </select>
      </div>

      <div className="md:flex hidden items-center space-x-4">

       <div>
        <img src="internet.png" alt="" />
       </div>

        <button className="bg-black text-[#FFFFFF] px-4 py-2 rounded-full">
        MyFeedback for business
        </button>

      </div>
    </header>
  );
};

export default Header;

