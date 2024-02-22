export interface IReactSelectDropdown {
  dataF?: any;
  loading?: boolean;
  noDataRenderer?: any;
  itemRenderer?: any;
  customClass?: string;
  onChange?: (event: any) => void;
  name?: string;
}