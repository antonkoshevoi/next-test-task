"use client";

import { ChevronDown, Diamond, Github, Slack, Figma, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const integrations = [
  {
    name: "Jira",
    icon: Diamond,
    preview: "LINK PREVIEW",
    sync: "SYNC",
    users: "Anyone in Acme Inc.",
  },
  {
    name: "GitHub",
    icon: Github,
    preview: "LINK PREVIEW",
    sync: "SYNC",
    users: "Anyone in Acme Inc.",
  },
  {
    name: "Slack",
    icon: Slack,
    preview: "LINK PREVIEW",
    sync: null,
    users: "Anyone in Acme Inc.",
  },
  {
    name: "Figma",
    icon: Figma,
    preview: "LINK PREVIEW",
    sync: null,
    users: "Anyone in Acme Inc.",
  },
];

export default function ConnectedAccounts() {
  const [isRestricted, setIsRestricted] = useState(false);

  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold pb-2">Integrations</h2>
      <Separator className="bg-gray-300" />

      <div className="flex items-center justify-between py-4">
        <div>
          <h4 className="text-sm">Restrict members from installing integrations</h4>
          <p className="text-xs text-gray-500">Workspace members can install any new integration.</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              {isRestricted ? "On" : "Off"}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setIsRestricted(false)}>
              <span>Off</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setIsRestricted(true)}>
              <span>On</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <h3 className="font-semibold">
        All integrations <span className="text-gray-500">{integrations.length}</span>
      </h3>

      <Table className="mt-6 w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Integration</TableHead>
            <TableHead>Users</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {integrations.map((integration) => (
            <TableRow key={integration.name}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <integration.icon className="w-6 h-6" />
                  <div>
                    <div className="flex space-x-2 pb-1">
                      <div className="font-medium">{integration.name}</div>
                      <div className="flex space-x-1 text-xs">
                        <Badge variant="secondary" className="text-gray-500">
                          {integration.preview}
                        </Badge>
                        {integration.sync && (
                          <Badge variant="secondary" className="text-gray-500">
                            {integration.sync}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs flex items-center">
                      Notion <ShieldCheck className="w-4 h-4 bg-green-500 text-white rounded-full ml-1 p-0.5" />
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{integration.users}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      •••
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Manage</DropdownMenuItem>
                    <DropdownMenuItem>Disconnect</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
