import { Link } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "about me" },
  { href: "/projects", label: "projects" }
];

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-48 bg-background border-r border-border p-8">
      <div className="flex flex-col space-y-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              "text-sm lowercase tracking-wide"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}