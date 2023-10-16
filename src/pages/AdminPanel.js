import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div>
      <h2>Админ-панель</h2>
      <Link to="/admin/edit-category">Редактировать категории</Link>
      <Link to="/admin/edit-product">Редактировать товары</Link>
    </div>
  );
}

export default AdminPanel;
