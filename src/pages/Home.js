import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupedCategories from '../utils/GroupedCategories';
import { Link } from 'react-router-dom';
import Alphabet from '../utils/Alphabet';



function Home() {
    const [category, setCategory] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [uniqueLetters, setUniqueLetters] = useState([]);
   
    useEffect(() => {
       
        axios.get('http://localhost:8080/api/category/grouped-categories')
        .then((response) => {
          
        
          const data = response.data;
          const categories = [];
    
          for (const key in data) {
           
            if (data.hasOwnProperty(key)) {
              const category = data[key];
              
              categories.push(category);
            }
          }
          setCategory(categories)
          
          const letters = [...new Set(category.map((category) => category.name.charAt(0)))];
        
          setUniqueLetters(letters);
          
        })
            .catch((error) => {
                console.error('Error fetching category:', error);
            });
    }, []);

    return (
        <div className="home-page">
      <h1>Выберите категорию</h1>
      <div className="category-list">
        {Object.keys(category).map((letter, index) => (
        <div key={index}>
            <h2>{letter}</h2>
            {category[letter].map((item) => (
      <div key={item.id} className="category">
        <h2>{item.name}</h2>
        <a href={`/category/${item.id}`}>Просмотреть</a>
      </div>
    ))}
  </div>
))}
      </div>
    </div>
  );
  
   
    
}

export default Home;
