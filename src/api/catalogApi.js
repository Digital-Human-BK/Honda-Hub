//DEPRECATED!!! this public API doesn't exist anymore

const BASE_URL =
  'https://cars-specs-automotive-catalog.p.rapidapi.com/api/cars';

const API_ENDPOINTS = {
  allModels: '/models/Honda',
  specifiedModel: '/full-specs/Honda/',
};

const API_HEADERS = {
  'X-RapidAPI-Host': 'cars-specs-automotive-catalog.p.rapidapi.com',
  'X-RapidAPI-Key': 'ce9beadf68mshe4169f98bb40f51p133c56jsn58115cce96ee',
};

const modelUrl = BASE_URL + API_ENDPOINTS.specifiedModel;
const allModelsUrl = BASE_URL + API_ENDPOINTS.allModels;

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    ...API_HEADERS,
  },
};
