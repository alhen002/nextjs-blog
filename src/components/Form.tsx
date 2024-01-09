import Button from "@/components/Button";
import { handleSubmit } from "@/lib/actions";

function Form() {
  return (
    <form className="flex flex-col gap-4 mt-12" action={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="tracking-tighter">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="border rounded-md py-1 px-2 placeholder:text-sm focus:accent-neutral-800"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="tracking-tighter">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="border rounded-md py-1 px-2 placeholder:text-sm focus:accent-neutral-800"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="tracking-tighter">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Your message"
          className="border rounded-md py-1 px-2 placeholder:text-sm focus:accent-neutral-800"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
export default Form;
