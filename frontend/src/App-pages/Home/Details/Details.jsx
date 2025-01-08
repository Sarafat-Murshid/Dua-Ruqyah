import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import img from "../../../assets/allah 1 (Traced).png";
import copy from "../../../assets/copy.png";
import bookmark from "../../../assets/bookmark 1.png";
import Group from "../../../assets/Group.png";
import share from "../../../assets/share 1.png";
import report from "../../../assets/report 1.png";

const Details = ({ isNavbarVisible, catId, subcatId }) => {
  const [duas, setDuas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dua?cat_id=${catId}&subcat_id=${subcatId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDuas(data.data);
        } else {
          console.error("Failed to fetch dua details");
        }
      })
      .catch((error) => console.error("Error fetching dua details:", error));
  }, [catId, subcatId]);

  if (duas.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`grid grid-flow-row gap-4 transition-all duration-200
            ${isNavbarVisible ? "w-full" : "w-200px"}`}
    >
      {duas.map((dua) => (
        <div
          key={dua.id}
          className="text-start rounded-lg bg-white shadow-2xl p-4 items-center text-lg font-inter"
        >
          <div>
            <h1 className="text-[#1FA45B] flex items-center gap-4 ">
              <img src={img} alt="" /> {dua.dua_name_en}
            </h1>
            <p className="py-4 text-justify ">{dua.top_en}</p>
          </div>

          {dua.dua_arabic && (
            <div className="py-4 text-justify ">
              <h2 className="pb-2">
                <span className="font-bold">Arabic: </span> {dua.dua_arabic}
              </h2>
            </div>
          )}

          {dua.transliteration_en && (
            <div className="py-4 text-justify ">
              <h2 className="pb-2">
                <span className="font-bold">Transliteration: </span>{" "}
                {dua.transliteration_en}
              </h2>
            </div>
          )}

          {dua.translation_en && (
            <div className="py-4 text-justify ">
              <h3>
                <span className="font-bold">Translation: </span>{" "}
                {dua.translation_en}
              </h3>
            </div>
          )}

          {dua.bottom_en && (
            <div className="py-4 text-justify ">
              <p>{dua.bottom_en}</p>
            </div>
          )}

          <p className="text-[#1FA45B]">Reference: {dua.refference_en}</p>
          <div className="flex gap-6 justify-end">
            <img src={copy} alt="Copy" />
            <img src={bookmark} alt="Bookmark" />
            <img src={Group} alt="Group" />
            <img src={share} alt="Share" />
            <img src={report} alt="Report" />
          </div>
        </div>
      ))}
    </div>
  );
};

Details.propTypes = {
  isNavbarVisible: PropTypes.bool,
  catId: PropTypes.number.isRequired,
  subcatId: PropTypes.number.isRequired,
};

export default Details;
