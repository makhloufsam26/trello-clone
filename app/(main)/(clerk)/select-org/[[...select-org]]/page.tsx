import { OrganizationList } from "@clerk/nextjs";
 
export default function OrganizationListPage() {
  return <OrganizationList hidePersonal 
  
  afterSelectOrganizationUrl="/organization/:slug"
  afterCreateOrganizationUrl="/organization/:slug"
  />;
}