export type RoleType = {
  id: string;
  name: string;
  description?: string;
};

// Initial mock role types - replace with API data as needed
export const roleTypes: RoleType[] = [
  { id: "admin", name: "Administrator", description: "Full access to all resources" },
  { id: "manager", name: "Manager", description: "Manage users and content" },
  { id: "editor", name: "Editor", description: "Create and edit content" },
  { id: "viewer", name: "Viewer", description: "Read-only access" },
];
