"use client";

import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { sendMessage, State } from "@/lib/actions";
import Paragraph from "@/components/Paragraph";
import { ArrowRight } from "lucide-react";

function Form() {
  const initialState: State = { errors: {} };
  const [state, dispatch] = useFormState(sendMessage, initialState);
  return (
    <form className="flex flex-col gap-4 mt-12" action={dispatch}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="tracking-tighter">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="border border-neutral-400 rounded py-1 px-2 placeholder:text-sm placeholder:text-neutral-500 focus:accent-neutral-700 bg-neutral-50 dark:bg-neutral-800 transition-color duration-500"
        />
        <p className="text-red-500 text-sm">{state?.errors?.name}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="tracking-tighter">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          className="border border-neutral-400 rounded py-1 px-2 placeholder:text-sm placeholder:text-neutral-500 focus:accent-neutral-700 bg-neutral-50 dark:bg-neutral-800 transition-color duration-500"
        />
        <p className="text-red-500 text-sm">{state?.errors?.email}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="tracking-tighter">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          className="border border-neutral-400 rounded py-1 px-2 placeholder:text-sm placeholder:text-neutral-500 focus:accent-neutral-700 bg-neutral-50 dark:bg-neutral-800 transition-color duration-500"
        />
        <p className="text-red-500 text-sm">{state?.errors?.message}</p>
      </div>
      <SubmitButton>
        Submit{""}
        <ArrowRight strokeWidth={1} />
      </SubmitButton>
    </form>
  );
}

export default Form;
