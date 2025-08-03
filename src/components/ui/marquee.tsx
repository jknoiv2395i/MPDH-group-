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
      src="/lovable-uploads/8966e534-84ef-43f6-b281-ae617cbed4b8.png"
      alt="AFCONS"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  blinkit: () => (
    <img
      src="/lovable-uploads/38720688-e40f-47a0-b2d9-94ce39f6e32d.png"
      alt="Blinkit"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  cars24: () => (
    <img
      src="/lovable-uploads/f905c976-c0f3-48ea-9322-8a7acb36ac38.png"
      alt="CARS24"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  eurokids: () => (
    <img
      src="/lovable-uploads/4d814958-b368-4324-ac77-6a0f2e9c2032.png"
      alt="Euro Kids"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  gril: () => (
    <img
      src="/lovable-uploads/9b5fbb01-5325-4af7-a182-16c02f77cd11.png"
      alt="GRIL"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  gammco: () => (
    <img
      src="/lovable-uploads/04ebd047-8f21-4dff-aa11-48792d5a7e3b.png"
      alt="Gammco CAT"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  lichfl: () => (
    <img
      src="/lovable-uploads/9b9698c4-53a2-4f27-8743-650b79726eb1.png"
      alt="LIC HFL"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  kalpataru: () => (
    <img
      src="/lovable-uploads/8b569840-8517-432e-8637-90b3a9c767ba.png"
      alt="Kalpa Taru"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  pnb: () => (
    <img
      src="/lovable-uploads/dee27924-582b-46e8-a5b9-3d7ad9820c43.png"
      alt="Punjab National Bank"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
  raiudyog: () => (
    <img
      src="/lovable-uploads/75c8d7e3-5efd-4369-8223-796b68277c5d.png"
      alt="Rai Udyog Limited"
      className="h-[28px] sm:w-auto w-[140px] object-contain"
    />
  ),
};


export function MarqueeDemo() {
  const arr = [Logos.afcons, Logos.blinkit, Logos.cars24, Logos.eurokids, Logos.gril, Logos.gammco, Logos.lichfl, Logos.kalpataru, Logos.pnb, Logos.raiudyog]

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
