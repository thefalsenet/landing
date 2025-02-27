import { Icons } from "./icons";

export function SiteHeader() {
  return (
    <div className="flex-none h-auto left-1/2 fixed top-0 -translate-x-1/2 w-full z-50">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1440px]">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold text-xl">thefalse</span>
          </div>
        </div>
      </header>
    </div>
  );
}
