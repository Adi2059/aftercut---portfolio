import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  glow = false,
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        "bg-white/[0.04] backdrop-blur-md",
        "border border-white/[0.08]",
        hover &&
          "transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1",
        glow && "shadow-[0_0_40px_rgba(124,58,237,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}