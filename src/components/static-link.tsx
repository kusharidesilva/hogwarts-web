import type { AnchorHTMLAttributes } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

/** A document navigation avoids broken RSC prefetch paths in Windows static exports. */
export default function Link({ href, ...props }: Props) {
  const destination = href.startsWith("/") && href !== "/" && !href.endsWith("/") ? `${href}/` : href;
  return <a href={destination} {...props} />;
}
