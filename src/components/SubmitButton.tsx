"use client";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import React from "react";

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? (
        <Loader2 className="animate-spin" height={24} width={24} />
      ) : (
        children
      )}
    </button>
  );
}
