import { BASE_URL, API_ENDPOINTS, options } from '../api/carApi';

export const getAllModels = () => request(API_ENDPOINTS.allModels);

export const getModel = (id) => request(API_ENDPOINTS.specifiedModel + id);

async function request(endpoint) {
  const response = await fetch(BASE_URL + endpoint, options);

  const jsonData = await response.json();
  if (response.ok) {
    return jsonData;
  } else {
    throw jsonData;
  }
}
