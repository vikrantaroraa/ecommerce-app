export interface FilterRowProps {
  filterLabel: string;
  filterName: string;
  filterUrlParameter: string;
  onFilterRowClick: (event: any) => any;
  isChecked: boolean;
}
