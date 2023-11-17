import React, { ReactNode } from "react"
import OrgControl from "./_components/org-control"

export default function OrgLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <OrgControl />

      {children}
    </>
  )
}
