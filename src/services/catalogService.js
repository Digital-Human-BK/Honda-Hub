import { CATALOG_ENDPOINTS, get } from '../api/api';

export async function getAllModels(){
  return get(CATALOG_ENDPOINTS.allModels);
};

export async function getModel(modelId){
  return get(CATALOG_ENDPOINTS.model + modelId);
};
