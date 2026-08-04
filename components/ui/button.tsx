import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* The pressed fill is opaque (token: accentPressed), not a wash —
           a translucent fill picks up whatever is behind it, so the same
           button on a card and on the page would answer a press differently. */
        /* Disabled keeps the shape and weakens both halves — 30% accent under
           a `muted` label — rather than fading the whole button out. */
        default:
          "bg-primary text-primary-foreground hover:bg-primary-pressed active:bg-primary-pressed disabled:bg-primary/30 disabled:text-muted-foreground disabled:opacity-100",
        outline:
          "border-border-strong bg-card hover:bg-accent hover:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground dark:hover:bg-accent",
        outline2:
          "border border-border-strong bg-card text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-foreground dark:hover:bg-accent/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        /* Links take `info`, the page's cool voice — not the accent fill. */
        link: "text-blue underline-offset-4 hover:underline",
      },
      size: {
        /* Explicit px metrics: the theme's --spacing is 0.2rem, so scale
           utilities run far smaller than they read. iOS pads fields 16px. */
        default:
          "h-[42px] gap-2 px-[18px] has-data-[icon=inline-end]:pr-[14px] has-data-[icon=inline-start]:pl-[14px]",
        xs: "h-[26px] gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-[34px] gap-1.5 px-[14px] has-data-[icon=inline-end]:pr-[10px] has-data-[icon=inline-start]:pl-[10px]",
        lg: "h-[48px] gap-1.5 px-[22px] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
