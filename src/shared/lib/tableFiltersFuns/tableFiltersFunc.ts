import { FilterValue } from 'antd/es/table/interface';

interface filtersProps {
  filters: Record<string, FilterValue | null>[];
  defaultFilters?: [];
  compositeKeys?: { [key: string]: string | number | boolean };
  translationKeys?: string[];
  translationValuesKeys?: (key: string, valueByKey: string) => string;
}

export const createFiltersArray = <T extends filtersProps>(props: T) => {
  let filtersArray: Array<{ [key: string]: string | number | boolean }> = [];

  if (props.defaultFilters) {
    filtersArray.push(...props.defaultFilters);
  }

  for (const key of Object.keys(props.filters)) {
    filtersArray = filtersArray.filter((element) => element.key !== key);

    if (props.filters[key]) {
      if (props.filters[key].length === 1) {
        filtersArray.push({
          key: props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
          operator:
            typeof props.filters[key][0] === 'boolean' || typeof props.filters[key][0] === 'number'
              ? 'EQUAL'
              : 'LIKE',
          field_type:
            typeof props.filters[key][0] === 'boolean'
              ? 'BOOLEAN'
              : typeof props.filters[key][0] === 'number'
              ? 'INTEGER'
              : 'STRING',
          value:
            props.translationValuesKeys &&
            props.translationKeys &&
            props.translationKeys.includes(key)
              ? props.translationValuesKeys(key, props.filters[key][0])
              : props.filters[key][0],
        });
      } else {
        filtersArray.push({
          key: props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
          operator: 'IN',
          field_type:
            typeof props.filters[key][0] === 'boolean'
              ? 'BOOLEAN'
              : typeof props.filters[key][0] === 'number'
              ? 'INTEGER'
              : 'STRING',
          values: props.filters[key],
        });
      }
    }
  }
  return filtersArray;
};
