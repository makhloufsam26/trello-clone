import { OrganizationSwitcher, auth } from "@clerk/nextjs"

export default function OrganizationSlugPage() {
  const { orgSlug } = auth()

  return (
    <div>
      Organization Slug : {orgSlug}
      
    </div>
  )
}
