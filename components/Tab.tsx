// components/Tab.js

import React from "react"
import { TabContext } from "./Tabs"

export function Tab({ label, children }) {
  console.log(label)
  const currentTab = React.useContext(TabContext)

  if (label !== currentTab) {
    return null
  }

  return children
}
