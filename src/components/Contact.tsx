import { DATA } from "../constants/data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-24 bg-brand-text text-brand-bg transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.4em] opacity-60 mb-12">
          Contact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-12">
              SEND A <br />
              MESSAGE.
            </h2>

            <form
              action={`https://formspree.io/f/${DATA.contact.formId}`}
              method="POST"
              className="space-y-6"
            >
              <div className="border-b border-brand-bg/20 pb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  className="w-full bg-transparent border-none outline-none py-2 font-mono text-sm placeholder:opacity-30 text-brand-bg"
                />
              </div>
              <div className="border-b border-brand-bg/20 pb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  className="w-full bg-transparent border-none outline-none py-2 font-mono text-sm placeholder:opacity-30 text-brand-bg"
                />
              </div>
              <div className="border-b border-brand-bg/20 pb-2">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  required
                  className="w-full bg-transparent border-none outline-none py-2 font-mono text-sm placeholder:opacity-30 text-brand-bg resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 pt-4 hover:opacity-50 transition-opacity"
              >
                <span className="font-mono text-sm tracking-[0.2em]">
                  SEND MESSAGE
                </span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none opacity-20">
                OR REACH <br />
                DIRECTLY.
              </h2>

              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                  General Inquiries
                </p>
                <a
                  href={`mailto:${DATA.email}`}
                  className="text-xl md:text-3xl font-light hover:line-through transition-all"
                >
                  {DATA.email}
                </a>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                  Current Availability
                </p>
                <p className="text-xl md:text-2xl">
                  {DATA.contact.availability}
                </p>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-brand-bg/10 flex flex-col sm:flex-row justify-between gap-6 font-mono text-[10px] uppercase tracking-widest opacity-60">
              <div className="flex gap-8">
                {DATA.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:line-through"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
              <p>© 2026 {DATA.name.split(" ").slice(0, -1).join(" ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
