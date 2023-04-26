export type userRole = "admin" | "user" | "logged_user";

export interface HeaderLinkProps {
  name: string;
  href: string;
  requiredRank?: userRole;
}

export const clientRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin", requiredRank: "admin" },
];

export const adminRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/admin" },
  { name: "Products", href: "/admin/products" },
  { name: "Categories", href: "/admin/orders" },
  { name: "Settings", href: "/admin/settings/" },
  { name: "Back to page", href: "/" },
];
