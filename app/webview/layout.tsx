import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WebviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="webview-shell min-h-full w-full max-w-full bg-surface text-default">
      {children}
    </div>
  );
}
