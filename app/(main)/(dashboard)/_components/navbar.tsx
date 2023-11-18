import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import React from "react"
import MobileSidebar from "./mobile-sidebar"

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full p-3 md:px-6 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <MobileSidebar />

        <div className="">
          <Logo />
        </div>

        <Button size="sm" variant={"primary"} className="h-auto p-2 md:py-1.5">
          <Plus className="h-4 w-4" />
          <span className="ml-1 hidden md:inline">Create</span>
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-3">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:slug"}
          afterSelectPersonalUrl={"/organization/:slug"}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <div className="h-6 w-[1px] bg-gray-200" />

        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: { height: 30, width: 30 } } }}
        />
      </div>
    </nav>
  )
}
