import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";

interface IPaginationBarProps {
  current: number;
  max: number;
}

const PaginationBar: FC<IPaginationBarProps> = ({ current, max }) => {
  return (
    <div className="container px-8 pb-10">
      <div className="flex items-center justify-end mt-10 space-x-4 py-1 pr-5">
        <Button variant="outline" size="icon" disabled={current < 2}>
          <Link href={current >= 2 ? `/?page=${current - 1}` : `/?page=1`}>
            <ChevronLeft />
          </Link>
        </Button>
        <p className="text-lg px-2">{current}</p>
        <Button variant="outline" size="icon" disabled={current >= max}>
          <Link
            href={current < max ? `/?page=${current + 1}` : `/?page=${max}`}
          >
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PaginationBar;
