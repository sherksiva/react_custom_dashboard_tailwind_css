import React, { useMemo, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import { roleTypes as initialRoles, RoleType } from "../../data/roles";

const Roles: React.FC = () => {
  const [roles, setRoles] = useState<RoleType[]>(initialRoles);
  const [newRoleName, setNewRoleName] = useState("");
  const [newRoleType, setNewRoleType] = useState("");

  const options = useMemo(
    () => roles.map((r) => ({ value: r.id, label: r.name })),
    [roles]
  );

  const handleAddRole = () => {
    if (!newRoleName) return;
    const id = newRoleName.toLowerCase().replace(/\s+/g, "-");
    const newRole: RoleType = { id, name: newRoleName, description: newRoleType };
    setRoles((s) => [newRole, ...s]);
    setNewRoleName("");
    setNewRoleType("");
  };

  return (
    <div className="p-6">
      <PageMeta title="Roles" description="Manage application roles" />
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Roles</h1>
          <p className="text-sm text-gray-600">Manage application roles and types.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Defined roles</h3>
            <ul className="space-y-3">
              {roles.map((r) => (
                <li key={r.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white/90">{r.name}</div>
                    <div className="text-sm text-gray-500">{r.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Add role</h3>
            <div className="space-y-3">
              <div>
                <Input
                  type="text"
                  value={newRoleName}
                  onChange={(e: any) => setNewRoleName(e.target.value)}
                  placeholder="Role name (e.g. Support)"
                />
              </div>
              <div>
                <Select
                  options={options}
                  placeholder="Select related role type (optional)"
                  onChange={(v) => setNewRoleType(v)}
                />
              </div>
              <div className="flex justify-end">
                <Button size="sm" onClick={handleAddRole}>
                  Add Role
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
