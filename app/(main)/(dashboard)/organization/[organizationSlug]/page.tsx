import { OrganizationSwitcher, auth } from "@clerk/nextjs"
import React from "react"

export default function OrganizationSlugPage() {
  const { orgSlug } = auth()

  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  )
}
