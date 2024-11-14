import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const logs = [
  {
    user: { name: "Albert Flores", email: "chambers@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Edited Private page",
    date: "2022/11/05 11:23 PM",
  },
  {
    user: { name: "Kristin Watson", email: "jackson.graham@gmail.com", avatar: "https://github.com/shadcn.png" },
    event: "Viewed Secret Project Q4",
    date: "2022/11/05 11:22 PM",
  },
  {
    user: { name: "Bessie Cooper", email: "deanna.curtis@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Viewed OS",
    date: "2022/11/05 11:21 PM",
  },
  {
    user: { name: "Bessie Cooper", email: "deanna.curtis@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Viewed OS",
    date: "2022/11/05 11:21 PM",
  },
  {
    user: { name: "Darrell Steward", email: "michelle.rivera@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Exported Product Search",
    date: "2022/11/05 11:10 PM",
  },
  {
    user: { name: "Cody Fisher", email: "michael.mitc@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Downloaded Contract.pdf",
    date: "2022/11/05 11:10 PM",
  },
  {
    user: { name: "Courtney Henry", email: "nathan.roberts@acmelabs.com", avatar: "https://github.com/shadcn.png" },
    event: "Added 12 members",
    date: "2022/11/05 11:10 PM",
  },
];

export default function AuditLogs() {
  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold pb-2">Audit log</h2>

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Date <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>All Time</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                User <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Users</DropdownMenuItem>
              {logs.map(({ user }, index) => (
                <DropdownMenuItem key={index}>{user.name}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Event <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Events</DropdownMenuItem>
              <DropdownMenuItem>Edited</DropdownMenuItem>
              <DropdownMenuItem>Viewed</DropdownMenuItem>
              <DropdownMenuItem>Exported</DropdownMenuItem>
              <DropdownMenuItem>Downloaded</DropdownMenuItem>
              <DropdownMenuItem>Added</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="default">Export</Button>
      </div>

      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">User</TableHead>
              <TableHead>Event</TableHead>
              <TableHead className="">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log, index) => (
              <TableRow key={index}>
                <TableCell className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={log.user.avatar} alt={log.user.name} />
                    <AvatarFallback>{log.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-xs">
                    <div className="font-medium text-gray-900">{log.user.name}</div>
                    <div className="text-gray-500">{log.user.email}</div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{log.event}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap text-xs text-gray-500 text-right">{log.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
