"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Extra allowed custom column keys.
 */
export type ExtraColumnKey = "action" | "actions" | "menu";

/**
 * Table Column Type
 */
export interface Column<T> {
  key: keyof T | ExtraColumnKey;
  label: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
}

/**
 * DataTable Component
 */
export interface DataTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable<T>({
  title,
  data,
  columns,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: DataTableProps<T>) {
  return (
    <div className="bg-white shadow-sm rounded-2xl py-4 border border-gray-100">
      {title && (
        <h2 className="px-4 pb-4 text-xl font-semibold text-gray-800">{title}</h2>
      )}

      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              {columns.map((col) => (
                <TableHead
                  key={String(col.key)}
                  className={cn("text-sm font-medium text-gray-500", col.className)}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-6 text-center text-gray-500"
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              data.map((item, i) => (
                <TableRow
                  key={i}
                  className={cn(
                    "hover:bg-gray-50 transition-colors",
                    i % 2 === 1 && "bg-gray-50/50"
                  )}
                >
                  {columns.map((col) => (
                    <TableCell key={String(col.key)} className="py-3 text-sm">
                      {col.render
                        ? col.render(item)
                        : String(item[col.key as keyof T] ?? "")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {onPageChange && totalPages > 1 && (
        <div className="flex items-center px-4 justify-between mt-4 text-sm">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            ← Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={i + 1 === currentPage ? "default" : "outline"}
                className={cn(
                  i + 1 === currentPage &&
                    "bg-[#256FF1] text-white hover:bg-[#256FF1]/90"
                )}
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next →
          </Button>
        </div>
      )}
    </div>
  );
}
