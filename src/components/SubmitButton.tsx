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
      className=" transition-colors duration-500 bg-neutral-50 border-neutral-400 hover:border-neutral-700 py-3 px-2 dark:bg-neutral-800 w-36 mx-auto rounded flex items-center justify-evenly border dark:border-neutral-400 font-light focus:accent-neutral-700   "
    >
      {pending ? (
        <Loader2 className="animate-spin" height={24} width={24} />
      ) : (
        children
      )}
    </button>
  );
}
