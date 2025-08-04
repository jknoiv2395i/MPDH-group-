import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'instrument': ['Instrument Sans', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				hero: {
					background: 'hsl(var(--hero-background))',
					foreground: 'hsl(var(--hero-foreground))',
					muted: 'hsl(var(--hero-muted))',
					button: {
						bg: 'hsl(var(--hero-button-bg))',
						fg: 'hsl(var(--hero-button-fg))'
					}
				},
				navbar: {
					light: {
						bg: "rgb(255 255 255 / 0.8)",
						border: "rgb(229 231 235)",
						text: "rgb(17 24 39)",
						hover: "rgb(243 244 246)"
					},
					dark: {
						bg: "rgb(11 12 15 / 0.8)",
						border: "rgb(22 24 29)",
						text: "rgb(255 255 255)",
						hover: "rgb(22 24 29)"
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"navbar-slide-down": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"navbar-dropdown": {
					"0%": { 
						opacity: "0",
						transform: "rotateX(-12deg) scale(0.9)" 
					},
					"100%": { 
						opacity: "1",
						transform: "rotateX(0) scale(1)" 
					}
				},
				marquee: {
					to: { transform: 'translateX(-50%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"navbar-slide-down": "navbar-slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				"navbar-dropdown": "navbar-dropdown 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
				marquee: 'marquee var(--duration, 30s) linear infinite'
			},
			backdropBlur: {
				navbar: "10px"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
