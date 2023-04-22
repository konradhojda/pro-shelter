export interface HeaderLinkProps {
  name: string;
  href: string;
  protected?: boolean;
}

export const clientRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Admin", href: "/admin", protected: true },
];

export const adminRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/admin" },
  { name: "Products", href: "/admin/products" },
  { name: "Categories", href: "/admin/orders" },
  { name: "Settings", href: "/admin/settings/" },
  { name: "Back to page", href: "/" },
];
