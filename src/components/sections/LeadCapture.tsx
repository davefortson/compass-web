"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { CALENDAR_URL } from "../../lib/constants";
import type { LeadFormData } from "../../types";

const ORG_TYPE_OPTIONS = [
  "",
  "Impact Investor / VC",
  "Conservation / NGO",
  "Consumer Brand",
  "Foundation / Grantmaker",
  "Government / Multilateral",
  "Other",
];

const BENEFITS = [
  "A working Compass dashboard with your real data structure",
  "At least one module configured for your use case",
  "A 30-minute walkthrough with the Regen AI team",
  "No commitment. No cost.",
];

const inputClasses =
  "w-full border border-brand-border rounded-[2px] px-3 py-2 font-body text-sm focus:border-brand-green focus:outline-none focus:shadow-[0_0_0_3px_rgba(79,181,115,0.15)] transition";

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        "Something went wrong. Please try again or book a call instead."
      );
    }
  };

  return (
    <section id="lead-capture" className="bg-brand-surface py-[120px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT - Value proposition */}
          <div>
            <SectionLabel>FREE PROTOTYPE OFFER</SectionLabel>

            <h2 className="font-heading font-black text-[42px] leading-tight mt-4">
              See Compass built for your organization — free
            </h2>

            <p className="font-body text-lg text-brand-muted mt-6">
              Tell us about your work. We&apos;ll build a complimentary Compass
              prototype tailored to your data, your team, and your impact goals.
            </p>

            <div className="mt-8 space-y-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="font-body text-base text-brand-dark">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-body text-base text-brand-muted mb-4">
                Prefer to talk first?
              </p>
              <Button variant="secondary" href={CALENDAR_URL}>
                SCHEDULE A CONSULTATION &rarr;
              </Button>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center text-center py-16"
              >
                <CheckCircle2 className="w-16 h-16 text-brand-green" />
                <h3 className="font-heading font-bold text-2xl mt-6">
                  We&apos;ve received your request.
                </h3>
                <p className="font-body text-brand-muted mt-2 max-w-md">
                  The Regen team will reach out within 2 business days to begin
                  scoping your prototype.
                </p>
                <p className="font-body text-brand-dark font-semibold mt-6">
                  Want to move faster?
                </p>
                <div className="mt-4">
                  <Button variant="primary" href={CALENDAR_URL}>
                    BOOK YOUR CONSULTATION NOW &rarr;
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* First Name */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className={inputClasses}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    {...register("organization", {
                      required: "Organization is required",
                    })}
                  />
                  {errors.organization && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.organization.message}
                    </p>
                  )}
                </div>

                {/* Organization Type */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    Organization Type
                  </label>
                  <select
                    className={inputClasses}
                    {...register("orgType", {
                      required: "Please select an organization type",
                    })}
                  >
                    {ORG_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option === "" ? "Select your organization type" : option}
                      </option>
                    ))}
                  </select>
                  {errors.orgType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.orgType.message}
                    </p>
                  )}
                </div>

                {/* Challenge (optional) */}
                <div>
                  <label className="font-body font-bold text-sm text-brand-dark block mb-1">
                    What&apos;s your biggest challenge with impact data today?
                  </label>
                  <textarea
                    rows={3}
                    className={inputClasses}
                    {...register("challenge")}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  loading={isSubmitting}
                >
                  GET MY FREE PROTOTYPE
                </Button>

                {submitError && (
                  <p className="text-red-500 text-sm mt-2">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
