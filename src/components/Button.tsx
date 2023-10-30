import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["rounded w-full h-11 rounded-md transition-color duration-300 box-border text-center focus-visible:outline focus-visible:outline-2"], {
  variants: {
    sidebar: {
      default: [],
    },
    action: {
      default: [],
    },
    form: {
      login: ['bg-red-400 hover:bg-red-500 text-white focus-visible:outline-indigo-600 text-sm'],
      register: ['bg-indigo-600 hover:bg-indigo-900 text-white focus-visible:outline-indigo-600 text-sm'],
    },
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({ sidebar, action, form, ...props }:ButtonProps) {
  return <button {...props} className={buttonStyles({sidebar, action, form})}></button>;
}
