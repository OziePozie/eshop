import React from "react";

function GroupedCategories({ groupedCategories }) {
    return (
      <div>
        {Object.entries(groupedCategories).map(([letter, categories]) => (
          <div key={letter}>
            <h2>{letter}</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  export default GroupedCategories