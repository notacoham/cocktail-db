import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);

  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);

  return <h1>Landing Page</h1>;
};

export default Landing;
