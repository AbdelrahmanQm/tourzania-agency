"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";

export type Tour = {
  id: string;
  name: string;
  duration: number;
  durationUnit: string;
  status: string;
  city: string;
  overview: string;
};

export const columns: ColumnDef<Tour>[] = [
  {
    accessorKey: "status",
    header: () => <div className="">Status</div>,

    cell: ({ row }) => {
      const tour = row.original;

      if (tour.status === "published") {
        return (
          <Badge variant="outline" className="text-solidgreen">
            {tour.status}
          </Badge>
        );
      }
      if (tour.status === "rejected") {
        return (
          <Badge variant="outline" className="text-solidred">
            {tour.status}
          </Badge>
        );
      }
      if (tour.status === "pending") {
        return (
          <Badge variant="outline" className="text-solidblue">
            {tour.status}
          </Badge>
        );
      }
      if (tour.status === "unpublished") {
        return (
          <Badge variant="outline" className="text-lightergray">
            {tour.status}
          </Badge>
        );
      }
    },
    filterFn: "status",
  },
  {
    accessorKey: "name",
    header: () => <div className="">Name</div>,
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          className=""
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tour = row.original;

      return (
        <div className="flex justify-center">
          <Link href="#" className={badgeVariants({ variant: "outline" })}>
            Preview
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {tour.status === "unpublished" && (
                <DropdownMenuItem>Publish</DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(tour.id)}
              >
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem>Delete</DropdownMenuItem>
              {tour.status === "published" && (
                <DropdownMenuItem>Unpublish</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
