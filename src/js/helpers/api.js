import axios from 'axios';
import { API_TOKEN } from '../secure';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  accept: 'application/json',
};

export const getData = async ({ page, abortController }) => {
  const options = {
    method: 'GET',
    headers,
    url: `trending/movie/day`,
    params: { page, language: 'en-US' },
    signal: abortController.signal,
  };

  const response = await axios(options);

  return response.data;
};

export const getDataById = async movieId => {
  const options = {
    method: 'GET',
    headers,
    url: `/movie/${movieId}`,
    params: { language: 'en-US' },
  };

  const response = await axios(options);

  return response.data;
};

export const getCreditsById = async movieId => {
  const options = {
    method: 'GET',
    headers,
    url: `/movie/${movieId}/credits`,
    params: { language: 'en-US' },
  };

  const response = await axios(options);

  return response.data;
};

export const getReviewsById = async movieId => {
  const options = {
    method: 'GET',
    headers,
    url: `/movie/${movieId}/reviews`,
    params: { language: 'en-US' },
  };

  const response = await axios(options);

  return response.data;
};

export const getReviewsBySearch = async ({ query, page }) => {
  const options = {
    method: 'GET',
    headers,
    url: `search/movie`,
    params: { include_adult: false, language: 'en-US', query, page },
  };

  const response = await axios(options);

  return response.data;
};
