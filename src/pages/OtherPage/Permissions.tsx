import React, { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import { permissionTypes as initialPermissions } from "../../data/permissions";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";

const Permissions: React.FC = () => {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [newPermissionName, setNewPermissionName] = useState("");

  const handleAdd = () => {
    if (!newPermissionName) return;
    const id = newPermissionName.toLowerCase().replace(/\s+/g, "-");
    setPermissions((s) => [{ id, name: newPermissionName }, ...s]);
    setNewPermissionName("");
  };

  return (
    <div className="p-6">
      <PageMeta title="Permissions" description="Manage permissions for roles and users" />
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Permissions</h1>
          <p className="text-sm text-gray-600">Create and manage permission types like read/write/update/delete.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Defined permissions</h3>
            <ul className="space-y-3">
              {permissions.map((p) => (
                <li key={p.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white/90">{p.name}</div>
                    {p.description && <div className="text-sm text-gray-500">{p.description}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Add permission</h3>
            <div className="space-y-3">
              <Input
                type="text"
                value={newPermissionName}
                onChange={(e: any) => setNewPermissionName(e.target.value)}
                placeholder="Permission name (e.g. Approve)"
              />
              <div className="flex justify-end">
                <Button size="sm" onClick={handleAdd}>
                  Add Permission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
