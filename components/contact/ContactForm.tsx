"use client";

import { FormEvent, useState } from "react";
import {
  Code2,
  Globe2,
  Smartphone,
  TrendingUp,
  MessageCircleQuestion,
  type LucideIcon,
} from "lucide-react";

const services: {
  name: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Software",
    icon: Code2,
  },
  {
    name: "Web",
    icon: Globe2,
  },
  {
    name: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Digital Marketing",
    icon: TrendingUp,
  },
  {
    name: "Something Else",
    icon: MessageCircleQuestion,
  },
];

type FormErrors = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

type ContactFormProps = {
  showcaseMode?: boolean;
};

type SubmissionResult = "normal" | "demo" | null;

export default function ContactForm({ showcaseMode = false }: ContactFormProps) {
  const [selectedService, setSelectedService] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult>(null);

  function validateForm(form: HTMLFormElement) {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email) {
      nextErrors.email = "Please enter your work email.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!service) {
      nextErrors.service = "Please select a service.";
    }

    if (message.length < 20) {
      nextErrors.message = "Please tell us a little more about your project.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setSubmissionResult(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(form);

      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        service: String(formData.get("service") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        website: String(formData.get("website") || "").trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your enquiry.");
      }

      setSubmissionResult(
        data.demo === true || showcaseMode ? "demo" : "normal",
      );
      setErrors({});

      form.reset();
      setSelectedService("");
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrors({
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="scroll-mt-24 border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16">
          {/* Left information */}
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              {showcaseMode ? "Portfolio Demo" : "Start a Conversation"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl">
              Tell us what you want to build.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              {showcaseMode
                ? "Explore the form interface and its validation flow. No enquiry or email will be sent from this showcase."
                : "Share a little about your business, idea or challenge. The more context you provide, the better we can understand where to start."}
            </p>

            {/* Service list */}
            {/* Service list */}
            <div className="mt-8 space-y-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.name}
                    className="grid grid-cols-[40px_1fr] items-center gap-4"
                  >
                    {/* Service Icon */}
                    <span
                      className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-[#F65011]
            text-white
          "
                    >
                      <Icon size={17} strokeWidth={2} aria-hidden="true" />
                    </span>

                    {/* Service Name */}
                    <span
                      className="
            flex min-h-10 items-center
            text-sm font-medium leading-5
            text-[#344054]
          "
                    >
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Process */}
            <div className="mt-9 rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
                What happens next
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#101828]">
                <span>Enquiry</span>

                <span aria-hidden="true" className="text-[#F65011]">
                  →
                </span>

                <span>Conversation</span>

                <span aria-hidden="true" className="text-[#F65011]">
                  →
                </span>

                <span>Direction</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="group relative rounded-[2rem] border border-[#E4E7EC] bg-[#F8FAFC] p-5 shadow-[0_18px_50px_rgba(16,24,40,0.05)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#F65011]/20 hover:shadow-[0_22px_55px_rgba(16,24,40,0.07)] sm:p-7 lg:p-8"
          >
            {showcaseMode && (
              <div className="mb-6 rounded-xl border border-[#F65011]/20 bg-[#FFF8F5] px-4 py-3">
                <p className="text-sm font-semibold text-[#101828]">
                  Portfolio demonstration
                </p>
                <p className="mt-1 text-xs leading-5 text-[#667085]">
                  Submissions demonstrate validation only. For project enquiries,
                  please contact me through Upwork.
                </p>
              </div>
            )}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Your Name <span className="text-[#F65011]">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className={[
                    "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#101828] outline-none transition-all duration-400 ease-out placeholder:text-[#98A2B3] hover:border-[#98A2B3] focus:border-[#F65011] focus:ring-4 focus:ring-[#F65011]/10",
                    errors.name ? "border-red-400" : "border-[#D0D5DD]",
                  ].join(" ")}
                />

                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Work Email <span className="text-[#F65011]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={[
                    "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#101828] outline-none transition-all duration-300 placeholder:text-[#98A2B3] hover:border-[#98A2B3] focus:border-[#F65011] focus:ring-4 focus:ring-[#F65011]/10",
                    errors.email ? "border-red-400" : "border-[#D0D5DD]",
                  ].join(" ")}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="mt-2 h-12 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-sm text-[#101828] outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-[#F65011] focus:ring-4 focus:ring-[#F65011]/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-[#344054]"
                >
                  Phone / WhatsApp
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your contact number"
                  className="mt-2 h-12 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-sm text-[#101828] outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-[#F65011] focus:ring-4 focus:ring-[#F65011]/10"
                />
              </div>
            </div>

            {/* Service */}
            <div className="mt-6">
              <label className="text-sm font-semibold text-[#344054]">
                What do you need? <span className="text-[#F65011]">*</span>
              </label>

              <div className="mt-3 flex flex-wrap gap-2">
                {services.map((service) => {
                  const isSelected = selectedService === service.name;

                  return (
                    <button
                      key={service.name}
                      type="button"
                      onClick={() => {
                        setSelectedService(service.name);
                        setErrors((current) => ({
                          ...current,
                          service: undefined,
                        }));
                        setSubmissionResult(null);
                      }}
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
                        isSelected
                          ? "border-[#F65011] bg-[#F65011] text-white shadow-[0_8px_20px_rgba(246,80,17,0.15)]"
                          : "border-[#D0D5DD] bg-white text-[#667085] hover:-translate-y-0.5 hover:border-[#F65011]/40 hover:bg-[#FFF8F5] hover:text-[#F65011] hover:shadow-[0_6px_16px_rgba(246,80,17,0.08)]",
                      ].join(" ")}
                    >
                      <service.icon size={14} strokeWidth={1.8} />
                      {service.name}
                    </button>
                  );
                })}
              </div>

              <input
                type="hidden"
                name="service"
                value={selectedService}
                required
              />

              {errors.service && (
                <p className="mt-2 text-xs font-medium text-red-600">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Project details */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#344054]"
              >
                Tell us about your project{" "}
                <span className="text-[#F65011]">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us what you're trying to build, improve or grow..."
                className={[
                  "mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm leading-6 text-[#101828] outline-none transition-all duration-400 ease-out placeholder:text-[#98A2B3] hover:border-[#98A2B3] focus:border-[#F65011] focus:ring-4 focus:ring-[#F65011]/10",
                  errors.message ? "border-red-400" : "border-[#D0D5DD]",
                ].join(" ")}
              />

              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-w-0 text-xs leading-5 text-[#98A2B3]">
                {showcaseMode
                  ? "Demo entries are validated but are not delivered or retained."
                  : "We'll use your information only to respond to your enquiry."}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center rounded-xl bg-[#F65011] px-6 text-sm font-semibold text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_14px_30px_rgba(246,80,17,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? showcaseMode
                    ? "Validating..."
                    : "Sending..."
                  : showcaseMode
                    ? "Try Demo Submission"
                    : "Send Enquiry"}
                <span
                  aria-hidden="true"
                  className={[
                    "ml-2 transition-transform duration-500 group-hover:translate-x-1",
                    isSubmitting ? "hidden" : "",
                  ].join(" ")}
                >
                  →
                </span>
              </button>
            </div>

            {submissionResult && (
              <div className="mt-4 rounded-xl border border-[#F65011]/20 bg-[#FFF8F5] px-4 py-3">
                <p className="text-sm font-semibold text-[#101828]">
                  {submissionResult === "demo"
                    ? "Portfolio Demo"
                    : "Your enquiry has been submitted successfully."}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#667085]">
                  {submissionResult === "demo" ? (
                    <>
                      This form demonstrates the interface and validation flow.
                      <br />
                      For project enquiries, please contact me through Upwork.
                    </>
                  ) : (
                    "Thank you for reaching out. The portfolio owner can review your enquiry and respond using the email you provided."
                  )}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
