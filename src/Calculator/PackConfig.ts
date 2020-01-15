import { CellType } from "./CellType";
export class PackConfig {
  id: number = 0;
  name: string = "";
  cell_type?: CellType;
  module_count: number = 0;
  module_in_series: number = 0;
  module_in_parallel: number = 0;
}
