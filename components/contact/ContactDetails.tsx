import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

type ContactDetailsProps = {
  showcaseMode?: boolean;
};

export default function ContactDetails({
  showcaseMode = false,
}: ContactDetailsProps) {
  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              Portfolio Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl">
              Prefer a direct conversation?
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              This interface demonstrates how an agency contact experience can
              present multiple communication options without exposing private
              account details.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-white p-5 max-sm:border-[#101828] max-sm:bg-[#101828]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#101828] max-sm:text-white">
                Project status
              </p>

              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-sm font-semibold text-[#98A2B3] max-sm:text-[#F65011]">
                  Portfolio demonstration
                </span>
                <span className="text-sm text-[#667085] max-sm:text-[#F65011]">
                  Not a staffed office
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Link
              href="#contact-form"
              aria-label="Go to the Nexa portfolio contact form"
              className="group relative overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/25 hover:shadow-[0_16px_35px_rgba(16,24,40,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] text-[#F65011] transition-all duration-300 group-hover:bg-[#F65011] group-hover:text-white">
                    <MessageCircle aria-hidden="true" size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#98A2B3]">
                      Contact form
                    </p>
                    <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-[#101828]">
                      Send a project enquiry
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                      {showcaseMode
                        ? "Use the form above to demonstrate its interface and validation flow."
                        : "Use the secure form above to demonstrate the server-side email workflow."}
                    </p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#D0D5DD] bg-[#F8FAFC] px-4 py-2.5 text-xs font-semibold text-[#344054] transition-all duration-300 group-hover:border-[#F65011]/30 group-hover:bg-[#FFF8F5] group-hover:text-[#F65011]">
                  Open Form <span aria-hidden="true" className="ml-2">→</span>
                </span>
              </div>
            </Link>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] text-[#F65011]">
                    <MapPin aria-hidden="true" size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#98A2B3]">Location</p>
                    <p className="mt-1.5 text-sm font-semibold leading-6 text-[#101828]">
                      Remote / Portfolio Demonstration
                    </p>
                    <p className="text-sm leading-6 text-[#667085]">
                      No physical business address is represented.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex h-[220px] items-center justify-center rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] sm:h-[240px]">
                  <div className="text-center">
                    <MapPin className="mx-auto text-[#F65011]" size={26} aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-[#344054]">Remote concept workspace</p>
                    <p className="mt-1 text-xs text-[#98A2B3]">Map intentionally omitted</p>
                  </div>
                </div>
              </div>

              {!showcaseMode && (
                <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] text-[#F65011]">
                      <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#98A2B3]">Demo email</p>
                      <p className="mt-1.5 break-all text-sm font-semibold leading-6 text-[#101828]">hello@example.com</p>
                    </div>
                  </div>
                </div>
              )}

              {!showcaseMode && (
                <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] text-[#F65011]">
                      <Phone aria-hidden="true" size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#98A2B3]">Demo phone</p>
                      <p className="mt-1.5 text-sm font-semibold leading-6 text-[#101828]">+1 (555) 010-2026</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#667085]">
                {showcaseMode
                  ? "For project enquiries, please contact me through Upwork."
                  : "The contact form remains fully functional when configured."}
              </p>
              <Link href="#contact-form" className="inline-flex min-h-10 items-center justify-center self-start rounded-xl bg-[#F65011] px-5 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_10px_25px_rgba(246,80,17,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2">
                Contact Form <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
