export type PermissionType = {
  id: string;
  name: string;
  description?: string;
};

export const permissionTypes: PermissionType[] = [
  { id: "read", name: "Read", description: "Read access" },
  { id: "write", name: "Write", description: "Write/create access" },
  { id: "update", name: "Update", description: "Modify existing records" },
  { id: "delete", name: "Delete", description: "Delete records" },
  { id: "export", name: "Export", description: "Export/download data" },
];
