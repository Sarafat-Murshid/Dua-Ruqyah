import React, { useState, useEffect } from "react";
import Frame from "../../../assets/Frame 1.png";

const Categories = ({ isNavbarVisible }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const categoriesWithSubcategories = data.data.map((category) => ({
            ...category,
            subcategories: [],
          }));
          setCategories(categoriesWithSubcategories);
          categoriesWithSubcategories.forEach((category) => {
            fetchSubcategories(category.cat_id).then((subcategories) => {
              setCategories((prevCategories) =>
                prevCategories.map((cat) =>
                  cat.cat_id === category.cat_id
                    ? { ...cat, subcategories }
                    : cat
                )
              );
            });
          });
        } else {
          console.error("Failed to fetch categories");
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const fetchSubcategories = (cat_id) => {
    return fetch(`http://localhost:5000/sub_category?cat_id=${cat_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return data.data;
        } else {
          console.error("Failed to fetch subcategories");
          return [];
        }
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
        return [];
      });
  };

  return (
    <div
      className={`lg:fixed shadow-2xl rounded-3xl w-[450px] lg:block hidden 
          h-[calc(100vh-140px)] overflow-y-auto top-28
          transition-all duration-300 ease-in-out
          ${isNavbarVisible ? "left-48" : "left-8"}`}
    >
      <div className="text-black">
        <h1 className="bg-green-600 text-white py-4 rounded-tr-2xl rounded-tl-2xl text-center">
          Categories
        </h1>

        {categories.map((category) => (
          <div key={category.id} className="collapse collapse-plus text-start">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div></div>
            <div className="collapse-title flex items-center gap-1">
              <div>
                <img src={Frame} alt="" />
              </div>
              <div>
                <h1>{category.cat_name_en}</h1>
                <h6>Subcategory: {category.no_of_subcat}</h6>
              </div>
            </div>
            <div className="collapse-content">
              <ul className="timeline-vertical">
                {category.subcategories && category.subcategories.length > 0 ? (
                  category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>{subcategory.subcat_name_en}</li>
                  ))
                ) : (
                  <li>No subcategories available</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
