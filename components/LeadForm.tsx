'use client'

import { FormEvent, useState } from 'react'

type FormValues = {
  fullName: string
  zipCode: string
  coverageNeed: string
  phone: string
  email: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  fullName: '',
  zipCode: '',
  coverageNeed: '',
  phone: '',
  email: '',
  consent: false,
}

export default function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}

    if (!values.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!/^\d{5}$/.test(values.zipCode.trim())) nextErrors.zipCode = 'Please enter a valid 5-digit ZIP code.'
    if (!values.coverageNeed) nextErrors.coverageNeed = 'Please select your coverage need.'
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.'
    if (!values.consent) nextErrors.consent = 'You must agree before requesting a quote.'

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setValues(initialValues)
  }

  return (
    <div id="lead-form" className="rounded-xl bg-white p-6 md:p-8 shadow-xl text-left text-slate-900">
      <h2 className="text-2xl font-bold mb-2">Get your free quote</h2>
      <p className="text-sm text-slate-600 mb-6">Tell us a bit about your needs and we&apos;ll match you with plans to review.</p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full name</label>
          <input
            id="fullName"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            value={values.fullName}
            onChange={(event) => setValues((prev) => ({ ...prev, fullName: event.target.value }))}
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP code</label>
            <input
              id="zipCode"
              type="text"
              inputMode="numeric"
              maxLength={5}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              value={values.zipCode}
              onChange={(event) => setValues((prev) => ({ ...prev, zipCode: event.target.value.replace(/\D/g, '') }))}
            />
            {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
          </div>

          <div>
            <label htmlFor="coverageNeed" className="block text-sm font-medium mb-1">Coverage need</label>
            <select
              id="coverageNeed"
              className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white"
              value={values.coverageNeed}
              onChange={(event) => setValues((prev) => ({ ...prev, coverageNeed: event.target.value }))}
            >
              <option value="">Select one</option>
              <option value="individual">Individual</option>
              <option value="family">Family</option>
              <option value="self-employed">Self-employed</option>
              <option value="short-term">Short-term coverage</option>
            </select>
            {errors.coverageNeed && <p className="mt-1 text-sm text-red-600">{errors.coverageNeed}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number</label>
            <input
              id="phone"
              type="tel"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              value={values.phone}
              onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
              value={values.email}
              onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="mt-1"
              checked={values.consent}
              onChange={(event) => setValues((prev) => ({ ...prev, consent: event.target.checked }))}
            />
            <span>
              I agree to be contacted by phone, email, and text by ClearQuote Health and licensed insurance partners about plan options. Consent is not required to purchase.
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
        </div>

        <button type="submit" className="w-full rounded-md bg-blue-700 px-4 py-3 text-white font-semibold hover:bg-blue-800 transition-colors">
          See my options
        </button>

        {isSubmitted && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
            Thanks! Your quote request has been received. A licensed agent will reach out soon.
          </p>
        )}
      </form>
    </div>
  )
}
