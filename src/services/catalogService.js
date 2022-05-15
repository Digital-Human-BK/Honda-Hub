const BASE_URL = 'https://cars-specs-automotive-catalog.p.rapidapi.com/api/cars';

const API_ENDPOINTS = {
  allModels: '/models/Honda',
  specifiedModel: '/full-specs/Honda/',
};

const API_HEADERS = {
  'X-RapidAPI-Host': 'cars-specs-automotive-catalog.p.rapidapi.com',
  'X-RapidAPI-Key': 'a31c9c567emshffc4774bd10c76fp13ae14jsn16d11fdf10f8',
};

export const getAllModels = () => request(API_ENDPOINTS.allModels);

export const getModel = (id) => request(API_ENDPOINTS.specifiedModel + id);


async function request(endpoint) {

  const response = await fetch(BASE_URL + endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...API_HEADERS,
    },
  });

  const jsonData = await response.json();
  if (response.ok) {
    return jsonData;
  } else {
    throw jsonData;
  }
}
