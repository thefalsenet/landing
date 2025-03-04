import { Icons } from "./icons";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <div className="flex-none left-1/2 fixed top-0 -translate-x-1/2 w-full z-50 bg-background h-16">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1440px]">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold text-xl">thefalse</span>
          </div>
          <Button
            variant={"outline"}
            className="-mr-4 md:-mr-6 -my-4 h-16 bprder-y-0 border-x border-0"
            asChild
            size={"lg"}
          >
            <a href="https://app.thefalse.net">login to app</a>
          </Button>
        </div>
      </header>
    </div>
  );
}
