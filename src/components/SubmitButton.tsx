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
    <button
      disabled={pending}
      className="rounded border dark:border-neutral-700 dark:hover:border-neutral-400 border-neutral-400 hover:border-neutral-700 group py-3 px-4 items-center flex justify-between dark:bg-neutral-800 bg-neutral-50 transition-colors duration-500"
    >
      {pending ? (
        <Loader2 className="animate-spin" height={24} width={24} />
      ) : (
        children
      )}
    </button>
  );
}
