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
        "w-full overflow-hidden sm:mt-24 mt-10 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
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

const companyLogos = [
  {
    name: "Cars24",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8c138dccd10b4437fa2ab39dcc94f48c257b7d9a?width=282",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "EuroKids",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fec4285dbb624029e8b6c9de36959767d19bc4c4?width=318",
    className: "h-10 md:h-12 w-auto"
  },
  {
    name: "PNB",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/d3e5b2cccee6943288c277b332bf0366a46b8e52?width=264",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "Rai Udyog",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/2348c4a2be97492144e4d0992d18816a6bb0ea6d?width=426",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "Afcons",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/c5a13460a254ce902b235aab63ce8e13f9f1ab69?width=368",
    className: "h-7 md:h-9 w-auto"
  },
  {
    name: "GRIL",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a6d45fe9dfa771047eaa35b002344238b00e446b?width=240",
    className: "h-10 md:h-12 w-auto"
  },
  {
    name: "GMMCO",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/28f33a80a075704a038d5470b803d27149ba32dd?width=370",
    className: "h-7 md:h-9 w-auto"
  },
  {
    name: "LIC HFL",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/81021c03b7d6a4ddbc0953152cfce9788b44ac8e?width=536",
    className: "h-9 md:h-11 w-auto"
  },
  {
    name: "Kalpataru",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f17aa6bedd8521830ad3f4727401f7d37e572344?width=518",
    className: "h-7 md:h-9 w-auto"
  },
  {
    name: "Blinkit",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0e2dcf416d46d4dadd698d86c74231111f5e56bf?width=400",
    className: "h-9 md:h-11 w-auto"
  }
];

export function MarqueeDemo() {
  return (
    <div className="bg-white pt-0.5 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
        </div>
        <Marquee pauseOnHover={true} speed={30}>
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-6 md:mx-10 flex items-center justify-center group"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className={cn(
                  "object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110",
                  logo.className
                )}
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
