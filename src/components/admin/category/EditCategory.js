import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function EditCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [editCategoryId, setEditCategoryId] = useState(null);

  const handleAddCategory = () => {
    const newCategoryData = {
      name: categoryName,
    };

    axios
      .post('http://localhost:8080/api/category', newCategoryData)
      .then((response) => {
        console.log('Категория успешно добавлена');
        fetchCategories();
      })
      .catch((error) => {
        console.error('Ошибка при добавлении категории:', error);
      });
  };

  const handleDeleteCategory = (categoryId) => {
    axios
      .delete(`http://localhost:8080/api/category/${categoryId}`)
      .then((response) => {
        console.log('Категория успешно удалена');
        fetchCategories();
      })
      .catch((error) => {
        console.error('Ошибка при удалении категории:', error);
      });
  };
  const handleEditCategory = (categoryId) => {
    setEditCategoryId(categoryId);
    const editedCategory = categories.find((category) => category.id === categoryId);
    setCategoryName(editedCategory.name);
  };

  const handleSaveCategory = () => {
    const updatedCategory = {
      name: categoryName,
    };

    axios
      .put(`http://localhost:8080/api/category/${editCategoryId}?name=${categoryName}`, updatedCategory)
      .then((response) => {
        console.log('Категория успешно обновлена');
        setEditCategoryId(null);
        setCategoryName('');
        fetchCategories();
      })
      .catch((error) => {
        console.error('Ошибка при обновлении категории:', error);
      });
  };

  const fetchCategories = () => {
    axios.get('http://localhost:8080/api/category').then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

 

  return (
    <div className="edit-category">
      <h2 className="category-heading">Управление категориями</h2>
      <div className="add-category">
        <h3>Добавить категорию</h3>
        <input
          type="text"
          placeholder="Название категории"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>Добавить</button>
      </div>
      <div className="delete-category">
        <h3>Удалить/Редактировать категорию</h3>
        <ul className="category-list">
  {categories.map((category) => (
    <li key={category.id} className="category-item">
      {category.id === editCategoryId ? (
        <div>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button onClick={handleSaveCategory}>Сохранить</button>
        </div>
      ) : (
        <span>{category.name}</span>
      )}
      <div className="category-buttons">
        <button onClick={() => handleDeleteCategory(category.id)}>Удалить</button>
        {category.id !== editCategoryId && (
          <button onClick={() => handleEditCategory(category.id)}>Редактировать</button>
        )}
      </div>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
}

export default EditCategory;
