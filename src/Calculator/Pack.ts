import { Module } from "./Module";
import { CellType } from "./CellType";
export class Pack {
  name: string = "";
  modules: Module[] = [];
  cellType?: CellType;
  cellCount = () =>
    this.modules.reduce((prev, curr) => prev + curr.cellCount(), 0);
  totalPrice = () =>
    this.modules.reduce(
      (prev, curr) =>
        // !curr.cell_type ? 0 : prev + curr.cellCount() * curr.cell_type.price,
        !this.cellType ? 0 : prev + curr.cellCount() * this.cellType.price,
      0
    );
  vNom = () => this.modules.reduce((prev, curr) => prev + curr.vNom(), 0);
  amps = () => this.modules.reduce((prev, curr) => prev + curr.amps(), 0);
  // returned in kWh. 1 kWh = 1000 Wh
  storedEnergy = () =>
    this.modules.reduce((prev, curr) => prev + curr.storedEnergy(), 0);
  ampHours = () =>
    this.modules.reduce((prev, curr) => prev + curr.ampHours(), 0);
}
