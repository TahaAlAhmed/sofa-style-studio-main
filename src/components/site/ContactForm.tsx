import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type Field = keyof z.infer<typeof schema>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sending, setSending] = useState(false);

  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as Field;
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setValues({ name: "", email: "", subject: "", message: "" });
      toast.success("Inquiry received", {
        description: "We'll be in touch within two working days.",
      });
    }, 700);
  };

  const fieldClass = (k: Field) =>
    `border-b py-2 transition-colors ${
      errors[k] ? "border-destructive" : "border-foreground/20 focus-within:border-primary"
    }`;

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className={fieldClass("name")}>
          <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Full Name
          </label>
          <input
            value={values.name}
            onChange={set("name")}
            type="text"
            maxLength={100}
            className="w-full bg-transparent outline-none pt-2 text-lg"
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>
        <div className={fieldClass("email")}>
          <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Email Address
          </label>
          <input
            value={values.email}
            onChange={set("email")}
            type="email"
            maxLength={200}
            className="w-full bg-transparent outline-none pt-2 text-lg"
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className={fieldClass("subject")}>
        <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Subject (Optional)
        </label>
        <input
          value={values.subject}
          onChange={set("subject")}
          type="text"
          maxLength={120}
          className="w-full bg-transparent outline-none pt-2 text-lg"
        />
      </div>
      <div className={fieldClass("message")}>
        <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Inquiry Detail
        </label>
        <textarea
          value={values.message}
          onChange={set("message")}
          rows={5}
          maxLength={2000}
          className="w-full bg-transparent outline-none pt-2 text-lg resize-none"
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em] disabled:opacity-50"
      >
        {sending ? "Sending…" : "Send Request"}
        <span className="w-12 h-px bg-foreground transition-all duration-500 group-hover:w-24" />
      </button>
    </form>
  );
}
