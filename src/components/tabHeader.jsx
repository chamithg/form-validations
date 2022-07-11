import React, { useState } from "react";

export default function TabHeader({
  tabName,
  handleSelect,
  tabContent,
  headerColor,
}) {
  const onSelect = () => {
    const newSelected = { tabName, tabContent };
    handleSelect(newSelected);
  };

  return (
    <div
      className="btn btn-primary m-2 w-24"
      style={{ backgroundColor: headerColor }}
      onClick={onSelect}>
      {tabName}
    </div>
  );
}
