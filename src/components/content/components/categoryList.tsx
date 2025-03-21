import React from "react";

const CategoryList = () => {
  const categories = [
    { name: "Tất cả", count: 108 },
    { name: "Thiết Kế Website", count: 36 },
    { name: "Thiết Kế App Mobile", count: 13 },
    { name: "Quản Lý Sản Xuất", count: 25 },
    { name: "Quản Lý Bán Hàng", count: 22 },
    { name: "Báo Chí Nói Về FOSO", count: 7 },
    { name: "Tin Tức FOSO", count: 5 },
  ];

  return (
    <div className="max-w-md mx-auto pt-4">
      <h2 className="text-2xl font-semibold mb-4">Danh Mục</h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span>{category.name}</span>
            <span className="text-gray-600">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
