import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-[#F65011] text-white hover:bg-[#D9430B] hover:-translate-y-0.5 shadow-sm"
      : "border border-[#E4E7EC] bg-white text-[#101828] hover:border-[#F65011] hover:text-[#F65011]";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}

      {showArrow && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </button>
  );
}