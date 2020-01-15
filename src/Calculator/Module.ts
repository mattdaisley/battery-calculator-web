import { CellType } from "./CellType";
export class Module {
  in_series: number = 0;
  in_parallel: number = 0;
  cell_type?: CellType;
  cellCount = () => this.in_series * this.in_parallel;
  vNom = () => (!this.cell_type ? 0 : this.in_series * this.cell_type.vnom);
  amps = () => (!this.cell_type ? 0 : this.in_parallel * this.cell_type.amps);
  storedEnergy = () =>
    !this.cell_type
      ? 0
      : this.in_parallel * this.vNom() * this.cell_type.capacity;
  ampHours = () =>
    !this.cell_type ? 0 : this.in_parallel * this.cell_type.capacity;
}
