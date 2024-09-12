import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
          <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER 
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          /></p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <h3 className="mb-3 text-sm font-medium">CATEGORIES</h3>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Men"} /> Men
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Men"} /> Women
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"kids"} /> kids
          </p>
        </div>
        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <h3 className="mb-3 text-sm font-medium">TYPE</h3>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Topwear"} /> Topwear
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Bottomwear"} />{" "}
            WoBottomwear
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Winterwear"} />{" "}
            Winterwear
          </p>
        </div>
      </div>
      {/* right side */}
      
    </div>
  );
};

export default Collections;
