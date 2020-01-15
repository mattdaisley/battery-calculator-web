import { CellType } from "./CellType";
import { Module } from "./Module";
import { PackConfig } from "./PackConfig";
import { Pack } from "./Pack";

import * as pack_types_json from "./packs.json";
export const packTypes: PackConfig[] = (<any>pack_types_json).packs;
export class Calculator {
  BuildPack = (
    {
      name,
      cell_type,
      module_count,
      module_in_series,
      module_in_parallel
    }: PackConfig,
    cellType: CellType
  ) => {
    var pack = new Pack();
    pack.cellType = cellType;
    pack.name = name;
    for (let i = 0; i < module_count; i++) {
      var mod = new Module();
      mod.in_series = module_in_series;
      mod.in_parallel = module_in_parallel;
      mod.cell_type = cellType;
      pack.modules.push(mod);
    }
    return pack;
  };
  PadText = (value: any, width: number = 15) => {
    return (value.toString() + new Array(width).join(" ")).slice(0, width);
  };
  PrintDivider = () => {
    return new Array(200).join("-");
  };
  PrintCellType = (cell_type: CellType) => {
    return `${cell_type.capacity * 1000}mAh, ${cell_type.vnom}V, ${
      cell_type.amps
    }A - ${cell_type.name} - ${cell_type.quantity} cells at $${
      cell_type.price
    } each. From ${cell_type.source}`;
  };
  PrintPackDetailsHeader = (): string => {
    // console.log(
    //   `${packConfig.cell_type.capacity} Ah cells at $${packConfig.cell_type.price} each`
    // );
    return `
      ${this.PadText(" ", 50)} 
      ${this.PadText("modules")} 
      ${this.PadText("in series")} 
      ${this.PadText("in parallel")} 
      ${this.PadText("total cells")} 
      ${this.PadText("total price")} 
      ${this.PadText("volts", 10)} 
      ${this.PadText("Ah", 10)} 
      ${this.PadText("kWh")} 
      ${this.PadText("A")} 
    `;
  };

  FindPack = (id: Number): PackConfig =>
    (<any>packTypes).filter((pack: PackConfig) => pack.id == id)[0];
  ComparePacksForCellType = (
    packs: PackConfig[],
    cellType: CellType
  ): Pack[] => {
    let result: Pack[] = [];

    // result.push(this.PrintCellType(cell_type));
    // result.push(this.PrintPackDetailsHeader());
    packs.forEach(packConfig =>
      result.push(this.BuildPack(packConfig, cellType))
    );
    return result;
  };
}
