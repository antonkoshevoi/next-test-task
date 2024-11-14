"use client";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const settings = [
  {
    title: "Disable public page sharing",
    description: "Disable the Share to web option in the Share menu on every page in this workspace.",
  },
  {
    title: "Disable guests",
    description: "Prevent anyone from inviting people outside the workspace to pages.",
  },
  {
    title: "Disable duplicating pages to other workspaces",
    description: "Prevent anyone from duplicating pages to other workspaces via the Move To or Duplicate To actions.",
  },
  {
    title: "Disable export",
    description: "Prevent anyone from exporting as Markdown, CSV, or PDF.",
  },
];

export default function Notifications() {
  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold pb-2">Security</h2>
      <Separator className="bg-gray-300" />

      {settings.map((setting, index) => (
        <div key={index} className="py-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">{setting.title}</h4>
              <p className="text-xs text-gray-500">{setting.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Switch />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
