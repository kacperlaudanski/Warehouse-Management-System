import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva(['rounded-md focus:ring-inset focus:ring-indigo-600'], {
  variants: {
     variant: {
        form: ["block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"], 
     }
}});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ variant, ...props }: Input) {
  return <input {...props} className={inputStyles({variant})}/>;
}
