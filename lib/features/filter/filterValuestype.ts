export interface FilterDefaultValuesType {
  data_types: { name: string }[];
  countries?: { id: number; name: string }[];
  categories?: {
    id: number;
    classifications?: string;
    classification_category?: string;
    category?: string;
  }[];
  business_groups?: { id: number; group: string }[];
  business_types?: { id: number; type: string }[];
  patent_kinds?: { id: number; kind: string }[];
  patent_types?: { id: number; type: string }[];
  years?: { year: string }[];
}

export const filterValuesActionTypes = {
  DATASET_CHANGE_ACTION: 'DATASET_CHANGE_ACTION',
  SEARCH_TEXT_CHANGE_ACTION: 'SEARCH_TEXT_CHANGE_ACTION',
  COUNTRY_CHANGE_ACTION: 'COUNTRY_CHANGE_ACTION',
  CLASSIFICATION_CHANGE_ACTION: 'CLASSIFICATION_CHANGE_ACTION',
  GROUP_CHANGE_ACTION: 'GROUP_CHANGE_ACTION',
  TYPE_FILTER_CHANGE_ACTION: 'TYPE_FILTER_CHANGE_ACTION',
  YOUNG_CHANGE_ACTION: 'YOUNG_CHANGE_ACTION',
  KIND_CHANGE_ACTION: 'KIND_CHANGE_ACTION',
};
