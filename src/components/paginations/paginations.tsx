import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paginations = () => {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between items-center">
        <PaginationPrevious href="#" />
        <div className="flex items-center gap-1">
          <PaginationItem>
            <PaginationLink href="/" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/product">2</PaginationLink>
          </PaginationItem>
         
        </div>

        <PaginationNext href="/product" />
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
