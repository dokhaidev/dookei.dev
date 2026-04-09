import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 md:px-8 xl:max-w-7xl">
      {children}
    </div>
  );
}

