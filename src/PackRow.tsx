import React from "react";
import { Pack } from "./Calculator/Pack";

interface PackRowProps {
  pack: Pack;
}

export default function PackRow({ pack }: PackRowProps) {
  return (
    <tr>
      <PackCell item={pack.name} style={{ minWidth: 300, textAlign: "left" }} />
      <PackCell item={pack.modules.length} />
      <PackCell item={pack.modules[0].in_series} />
      <PackCell item={pack.modules[0].in_parallel} />
      <PackCell
        item={new Intl.NumberFormat("en-US").format(pack.cellCount())}
      />
      <PackCell
        item={new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(pack.totalPrice())}
      />
      <PackCell item={new Intl.NumberFormat("en-US").format(pack.vNom())} />
      <PackCell item={new Intl.NumberFormat("en-US").format(pack.ampHours())} />
      <PackCell
        item={new Intl.NumberFormat("en-US").format(pack.storedEnergy() / 1000)}
      />
      <PackCell item={new Intl.NumberFormat("en-US").format(pack.amps())} />
    </tr>
  );
}

function PackCell({ item, style }: any) {
  return <td style={{ minWidth: 100, ...style }}>{item}</td>;
}
