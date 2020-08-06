import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-620x349.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://jesswitkins.files.wordpress.com/2012/04/100_2023.jpg',
    rating: 1,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://www.curiouscuisiniere.com/wp-content/uploads/2018/05/Kimbap-Korean-Sushi-5900-pin.jpg',
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>;
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
