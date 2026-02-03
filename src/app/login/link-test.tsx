import LinkPrimatives from "next/link";
import React from "react";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  redirectType?: "hard" | "soft";
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, redirectType = "soft", href, ...props }, ref) => {
    const Comp = redirectType === "soft" ? LinkPrimatives : "a";

    return (
      <Comp href={href} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);

export { Link };
