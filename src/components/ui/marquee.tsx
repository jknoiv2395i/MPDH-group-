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
  afcons: () => (
    <img 
      src="/lovable-uploads/363ef036-bb62-4e0e-893a-c1faae2e1335.png" 
      alt="AFCONS" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  blinkit: () => (
    <img 
      src="/lovable-uploads/f3661c68-049c-4305-b47a-8d40c305d3ef.png" 
      alt="blinkit" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  cars24: () => (
    <img 
      src="/lovable-uploads/fd685efc-1e1a-4ffd-9361-0458916f91ad.png" 
      alt="CARS24" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  eurokids: () => (
    <img 
      src="/lovable-uploads/223eb9f8-6065-4938-ab83-518be67df00e.png" 
      alt="Euro Kids" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  gril: () => (
    <img 
      src="/lovable-uploads/ebf5e218-b265-4a88-8a8a-a6b8bc6c9d18.png" 
      alt="GRIL" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  gmmco: () => (
    <img 
      src="/lovable-uploads/9a3b9b11-804d-4e9c-870a-6375e8f30987.png" 
      alt="Gmmco CAT" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  lichfl: () => (
    <img 
      src="/lovable-uploads/a8b037e4-2456-4981-854c-9304619c957c.png" 
      alt="LIC HFL" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  kalpataru: () => (
    <img 
      src="/lovable-uploads/88c065b7-5b3c-412b-bb44-9f6a7a87ddde.png" 
      alt="KALPA-TARU" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  pnb: () => (
    <img 
      src="/lovable-uploads/59762bbd-6531-4fae-8b55-abd91c58f90f.png" 
      alt="Punjab National Bank" 
      className="h-[40px] w-auto object-contain"
    />
  ),
  raiudyog: () => (
    <img 
      src="/lovable-uploads/1aa84bb9-c6df-49cf-a17c-93d5a3f11bc0.png" 
      alt="RAI UDYOG LIMITED" 
      className="h-[40px] w-auto object-contain"
    />
  ),
};


export function MarqueeDemo() {
  const arr = [
    Logos.afcons, 
    Logos.blinkit, 
    Logos.cars24, 
    Logos.eurokids, 
    Logos.gril, 
    Logos.gmmco, 
    Logos.lichfl, 
    Logos.kalpataru, 
    Logos.pnb, 
    Logos.raiudyog
  ]

  return (
    <Marquee pauseOnHover={true} speed={25}>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-center"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}
