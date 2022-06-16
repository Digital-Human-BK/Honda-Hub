export const BASE_URL =
  'https://cars-specs-automotive-catalog.p.rapidapi.com/api/cars';

export const API_ENDPOINTS = {
  allModels: '/models/Honda',
  specifiedModel: '/full-specs/Honda/',
};

export const API_HEADERS = {
  'X-RapidAPI-Host': 'cars-specs-automotive-catalog.p.rapidapi.com',
  'X-RapidAPI-Key': 'a31c9c567emshffc4774bd10c76fp13ae14jsn16d11fdf10f8',
};

export const modelUrl = BASE_URL + API_ENDPOINTS.specifiedModel;
export const allModelsUrl = BASE_URL + API_ENDPOINTS.allModels;

export const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    ...API_HEADERS,
  }
}