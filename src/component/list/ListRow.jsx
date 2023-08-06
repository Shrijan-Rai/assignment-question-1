// ListRow.js
import React from "react";
import ListCell from "./ListRowCell";

const ListRow = ({ row, onSelectItem, timestamps, currency }) => {
  const handleClick = () => {
    onSelectItem(row, timestamps);
  };

  return (
    <tr onClick={handleClick}>
      <ListCell>{row["&id"]}</ListCell>
      <ListCell>{row.executionDetails.buySellIndicator}</ListCell>
      <ListCell>{row.executionDetails.orderStatus}</ListCell>
      <ListCell>{timestamps.timestamps.orderSubmitted}</ListCell>
      <ListCell>{row.bestExecutionData.orderVolume[currency]}</ListCell>
    </tr>
  );
};

export default ListRow;
