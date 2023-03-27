import React from "react"
import { UITags } from "@/types"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, UITags{

} 

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button ref={ref} {...props} />
  )
})

Button.displayName = "Button";