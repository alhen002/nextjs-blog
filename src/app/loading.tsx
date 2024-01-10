import React from "react";
import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 text-center">
      <Loader2 className="animate-spin" height={24} width={24} />
    </div>
  );
}

export default Loading;
