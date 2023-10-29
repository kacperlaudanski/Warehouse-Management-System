import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(['hover:bg-amber-500', 'transition'], {
    variants:{
        size:{
          superBig:['w-60', 'h-60', 'bg-red-400', 'rounded', 'flex', 'justify-center', 'items-center'], 
          default: ['w-20', 'h20', 'bg-cyan-500', 'rounded', 'flex', 'justify-center', 'items-center'], 
        }, 
        action:{
          redirect:['w-12', 'h-12', 'bg-emerald-400', 'rounded', 'flex', 'justify-center', 'items-center']
        }
    }
})

type ButtonProps = VariantProps<typeof buttonStyles>&ComponentProps<'button'>; 

export default function Button({size, action, ...props}: ButtonProps){
    return <button {...props} className={buttonStyles({size, action})}>

    </button>
}