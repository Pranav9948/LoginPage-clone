import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FloatingInput = forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return <Input placeholder=" " className={cn("peer", className)} ref={ref} {...restProps} />;
});
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",
        className
      )}
      ref={ref}
      {...restProps}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

const FloatingLabelInput = forwardRef((props, ref) => {
  const { id, label, ...restProps } = props;

  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...restProps} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingInput, FloatingLabel, FloatingLabelInput };
