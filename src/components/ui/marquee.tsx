import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden z-10",
        className
      )}
      style={{ margin: "96px auto 0" }}
      {...props}
    >
      <div className="relative flex max-w-[1427px] overflow-hidden py-5 mx-auto">
        <div 
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}

const Logos = {
  gril: () => (
    <img
      src="/lovable-uploads/1f347b4b-7596-48f4-9513-49fea843cb09.png"
      alt="GRIL"
      className="h-[40px] w-auto object-contain"
    />
  ),
  gammco: () => (
    <img
      src="/lovable-uploads/a3886fd5-3f75-4385-be70-a75789d37306.png"
      alt="Gammco CAT"
      className="h-[40px] w-auto object-contain"
    />
  ),
  cars24: () => (
    <img
      src="/lovable-uploads/f8f4bcd8-4272-40cd-b1a3-6917f6abebbe.png"
      alt="CARS24"
      className="h-[40px] w-auto object-contain"
    />
  ),
  afcons: () => (
    <img
      src="/lovable-uploads/7995cb73-5d2d-48c8-9e47-10d9c47f9751.png"
      alt="AFCONS"
      className="h-[40px] w-auto object-contain"
    />
  ),
  lichfl: () => (
    <img
      src="/lovable-uploads/9dfee7f5-722d-4db2-b75c-4a3a4662ca67.png"
      alt="LIC HFL"
      className="h-[40px] w-auto object-contain"
    />
  ),
};


export function MarqueeDemo() {
  const arr = [Logos.gril, Logos.gammco, Logos.cars24, Logos.afcons, Logos.lichfl]

  return (
    <Marquee>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}
