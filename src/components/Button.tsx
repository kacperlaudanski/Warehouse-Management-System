import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["rounded h-11 rounded-md transition-color duration-300 box-border text-center focus-visible:outline focus-visible:outline-2"], {
  variants: {
    variant:{
      ghost: ['bg-transparent hover:bg-neutral-300/30 '], 
      active: ['bg-blue-400 text-white'], 
    }, 
    sidebar: {
      extended: ['w-full h-10 mx-4 flex items-center justify-between pl-3 pr-3 hover:bg-blue-400 hover:text-white mt-2'],
      rolled: [`w-16 h-16 flex flex-column justify-center text-sm items-center hover:bg-blue-400 hover:text-white mt-2`], 
    },
    action: {
      login: ['w-full bg-red-400 hover:bg-red-500 text-white focus-visible:outline-indigo-600 text-sm'],
      register: ['w-full bg-indigo-600 hover:bg-indigo-900 text-white focus-visible:outline-indigo-600 text-sm'],
      logout: ['w-24 bg-neutral-300 text-slate-500 hover:bg-neutral-800'], 
    },
    icon: {
      iconButton: ['w-11 h-11 text-white flex items-center justify-center']
    },
    screen: {
      mobile: ['lg:hidden md:hidden'], 
    }
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({ sidebar, action, icon, variant, screen,  ...props }:ButtonProps) {
  return <button {...props} className={buttonStyles({sidebar, action, icon, variant, screen})}></button>;
}
