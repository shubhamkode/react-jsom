import Link from "next/link";
import ThemeToggleButton from "./themeToggleButton";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="md:container px-4 flex items-center justify-between py-3">
      <Link
        href="/"
        className="text-2xl tracking-wider leading-relaxed font-[500] px-2"
      >
        React JSOM
      </Link>
      <div className="flex items-center space-x-2 p-1">
        <Button asChild variant="link" size="icon">
          <Link
            href="https://github.com/shubhamkode"
            rel="blank"
            target="noopener noreferrer"
          >
            <GithubIcon className="h-auto w-[1.2rem] aspect-square" />
          </Link>
        </Button>
        <ThemeToggleButton />
      </div>
    </div>
  );
}
