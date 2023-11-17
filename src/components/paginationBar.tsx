"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function PaginationBar({ range }: { range: number }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  return (
    <div className="flex items-center justify-end mt-10 space-x-4 py-1 pr-5">
      <Button variant="outline" size="icon" asChild>
        <Link href={`/?page=${+(page ?? 1) >= 2 ? +(page ?? 2) - 1 : 1}`}>
          <ChevronLeft />
        </Link>
      </Button>
      <p className="text-lg px-2">{page ?? 1}</p>

      <Button variant="outline" size="icon">
        <Link
          href={`/?page=${+(page ?? 1) < range ? +(page ?? 1) + 1 : range}`}
        >
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
