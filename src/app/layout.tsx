import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` segment, this layout is only
// renderable when the route contains a valid locale.
export default function RootLayout({ children }: Props) {
  return children;
}
