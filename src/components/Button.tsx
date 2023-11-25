import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["rounded h-11 rounded-md transition-color duration-300 box-border text-center focus-visible:outline focus-visible:outline-2"], {
  variants: {
    variant:{
      ghost: ['bg-transparent hover:bg-neutral-300/30 '], 
      active: ['bg-blue-400 text-white'], 
      returnArea: ['bg-gradient-to-r from-blue-600 to-green-300'], 
      pendingArea: ['bg-gradient-to-r from-pink-300 to-blue-500'], 
      stockLevel: ['w-3/5 h-14 text-white bg-blue-400 hover:bg-blue-500'], 
      navbarLogin:['w-32 h-10 rounded-xl text-white bg-neutral-300 bg-opacity-30 border-solid border-2 border-white hover:bg-neutral-800'], 
    }, 
    orders:{
      complete: ['w-full h-12 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-lg']
    }, 
    sidebar: {
      extended: ['w-full h-10 mx-4 flex items-center justify-between pl-3 pr-3 hover:bg-blue-400 hover:text-white mt-2'],
      rolled: [`w-16 h-16 flex flex-column justify-center text-sm items-center hover:bg-blue-400 hover:text-white mt-2`], 
    },
    action: {
      login: ['w-full bg-red-400 hover:bg-red-500 text-white focus-visible:outline-indigo-600 text-sm'],
      register: ['w-full bg-indigo-600 hover:bg-indigo-900 text-white focus-visible:outline-indigo-600 text-sm'],
      logout: ['w-24 bg-neutral-300 text-slate-500 hover:bg-neutral-800'], 
      relocate: ['w-full h-2/5 bg-gradient-to-r from-indigo-700 to-blue-500 hover:bg-blue-400 text-white'],
      add:['w-36 h-11 text-white bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-lg'], 
    },
    icon: {
      iconButton: ['w-11 h-11 text-white flex items-center justify-center'],
      dashboardIcon: ['w-11 h-11 text-neutral-900 flex items-center justify-center'], 
      actionButton: ['w-11 h-11 text-black flex items-center justify-center']
    },
    screen: {
      mobile: ['lg:hidden md:hidden'], 
    }
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({ sidebar, action, icon, variant, screen, orders,  ...props }:ButtonProps) {
  return <button {...props} className={buttonStyles({sidebar, action, icon, variant, screen, orders})}></button>;
}
