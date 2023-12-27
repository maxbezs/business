import "../globals.css";

export const metadata = {
  title: "Admin Sanity CMS",
  description: "max_bezs business Sanity CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
