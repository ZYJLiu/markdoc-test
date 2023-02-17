import React from "react"

export const TabContext = React.createContext("")

export function Tabs({ labels, children }) {
  const [currentTab, setCurrentTab] = React.useState(labels[0] || "")

  return (
    <TabContext.Provider value={currentTab}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {labels.map((label) => (
            <button
              key={label}
              role="tab"
              aria-selected={label === currentTab}
              onClick={() => setCurrentTab(label)}
              style={{
                border: "none",
                background: "none",
                fontWeight: label === currentTab ? "bold" : "normal",
                borderBottom:
                  label === currentTab
                    ? "2px solid black"
                    : "2px solid transparent",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {children}
      </div>
    </TabContext.Provider>
  )
}
