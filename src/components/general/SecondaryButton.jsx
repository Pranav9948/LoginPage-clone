import React from "react";
import { Button } from "../ui/button";

function SecondaryButton({text,Icon}) {
  return (
    
      <Button
        variant="outline"
        type="submit"
        className="w-full max-w-sm flex items-center justify-center gap-4"
        asChild
      >
        <div>
          <Icon />
          <p className="text-sm font-bold ">{text}</p>
        </div>
      </Button>
    
  );
}

export default SecondaryButton;
