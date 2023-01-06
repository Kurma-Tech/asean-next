export interface FilterDefaultValuesType {
  data_types: { name: string }[];
  countries?: { id: number; name: string }[];
  categories?: { id: number; classifications: string }[];
  business_groups?: { id: number; group: string }[];
  business_types?: { id: number; type: string }[];
  patent_kinds?: { id: number; kind: string }[];
  patent_types?: { id: number; type: string }[];
  years?: { year: string }[];
}

export const filterValuesActionTypes = {
  DATASET_CHANGE_ACTION: 'DATASET_CHANGE_ACTION',
};
