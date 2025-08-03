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
    <img src="/lovable-uploads/0579c038-1440-4182-bf7f-380a799d6750.png" alt="AFCONS" className="h-[40px] w-auto" />
  ),
  blinkit: () => (
    <img src="/lovable-uploads/74c1e88a-cfc7-450b-bc39-9ec6d5c83e52.png" alt="Blinkit" className="h-[40px] w-auto" />
  ),
  cars24: () => (
    <img src="/lovable-uploads/c118deb7-1dcc-41bf-86be-bfcbc7c9d155.png" alt="Cars24" className="h-[40px] w-auto" />
  ),
  eurokids: () => (
    <img src="/lovable-uploads/6c21454b-2228-4760-835e-567ceb339421.png" alt="Euro Kids" className="h-[40px] w-auto" />
  ),
  gril: () => (
    <img src="/lovable-uploads/eff05859-2957-49a4-8273-56b237c5bbef.png" alt="GRIL" className="h-[40px] w-auto" />
  ),
  gmmco: () => (
    <img src="/lovable-uploads/03d44f11-e20b-4dfe-b764-0a255e06807a.png" alt="Gmmco CAT" className="h-[40px] w-auto" />
  ),
  lichfl: () => (
    <img src="/lovable-uploads/582e5d96-49f9-4dc4-8ef2-315c8d96fa74.png" alt="LIC HFL" className="h-[40px] w-auto" />
  ),
  kalpataru: () => (
    <img src="/lovable-uploads/ea24e95e-f984-40f4-b791-397a0135a450.png" alt="Kalpa-Taru" className="h-[40px] w-auto" />
  ),
  pnb: () => (
    <img src="/lovable-uploads/548d19df-0884-473e-983b-0eab9ba6143f.png" alt="Punjab National Bank" className="h-[40px] w-auto" />
  ),
  raiudyog: () => (
    <img src="/lovable-uploads/00d152c7-8c9d-4001-9022-d13450b7a54f.png" alt="Rai Udyog Limited" className="h-[40px] w-auto" />
  ),
};


export function MarqueeDemo() {
  const arr = [Logos.afcons, Logos.blinkit, Logos.cars24, Logos.eurokids, Logos.gril, Logos.gmmco, Logos.lichfl, Logos.kalpataru, Logos.pnb, Logos.raiudyog]

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
