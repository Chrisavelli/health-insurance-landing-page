'use client'

import { useState } from 'react'
import LeadForm from '@/components/LeadForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Find Your Perfect Health Insurance Plan
          </h1>
          <p className="text-xl mb-8">
            Compare quotes from top insurers and save up to 30% on health insurance
          </p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p>Get quotes in under 5 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p>Your information is safe and secure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Save Money</h3>
              <p>Compare plans and save on premiums</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">"Saved $200/month on insurance. Highly recommend!"</p>
              <p className="font-bold">- Sarah M.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">"Easy process and great customer service!"</p>
              <p className="font-bold">- John D.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
