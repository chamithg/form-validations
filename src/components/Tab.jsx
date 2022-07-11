import React from "react";

export default function Tab({ content }) {
  console.log(content);
  return <div className="mt-5 h-25 w-100 border border-primary">{content}</div>;
}
