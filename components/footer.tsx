import Link from "next/link";

const navigation = [
  { name: "about", href: "/about" },
  { name: "terms of service", href: "/terms" },
  { name: "privacy", href: "/privacy" },
];

const socialLinks = [
  { name: "x (twitter)", href: "https://twitter.com/thefalsenet" },
  { name: "instagram", href: "https://instagram.com/thefalsenet" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background w-full border-t after:block after:h-px after:bg-muted-foreground/10">
      <div className="max-w-[1440px] border-x mx-auto flex h-14 px-6 items-center justify-between grow">
        <nav>
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
