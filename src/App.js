import "./App.css";
import Tab from "./components/Tab";
import TabHeader from "./components/tabHeader";

import React, { useState } from "react";

function App() {
  const [tabs, setTabs] = useState([
    { name: "tab1", content: " this is tab1 content" },
    { name: "tab2", content: " this is tab2 content" },
    { name: "tab3", content: " this is tab3 content" },
    { name: "tab4", content: " this is tab4 content" },
  ]);
  const [selected, setSelected] = useState([]);

  const handleSelect = (newSelected) => {
    console.log(newSelected);
    setSelected(newSelected);
  };

  return (
    <div className="App">
      <div className="conatainer w-25 p-5">
        <div className="btn-container w-100">
          {tabs.map((tab, index) => {
            return (
              <TabHeader
                key={index}
                tabName={tab.name}
                tabContent={tab.content}
                handleSelect={handleSelect}
                headerColor={tab.name === selected.tabName ? "red" : null}
              />
            );
          })}
        </div>
        <Tab content={selected.tabContent} />
      </div>
    </div>
  );
}

export default App;
