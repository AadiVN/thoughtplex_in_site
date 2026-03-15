import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">ThoughtPlex</span>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <i className="fas fa-home mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-4">Last updated: November 18, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using ThoughtPlex India's website and services, you agree to be bound by these
                Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
              <p className="text-gray-600">
                ThoughtPlex India provides software consultancy, architecture, and related services. We reserve
                the right to withdraw or amend our services without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600">
                The website and its original content, features, and functionality are owned by ThoughtPlex India
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Notify us of any unauthorized access</li>
                <li>Use services in compliance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                ThoughtPlex India shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend access to our services immediately, without prior notice, for
                conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of India,
                and any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any changes by
                updating the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                For any questions about these Terms, please contact us at:<br />
                <strong>Email:</strong> info@thoughtplex.in<br />
                <strong>Phone:</strong> +91 99 1234 5678<br />
                <strong>Address:</strong> Bangalore, India
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} ThoughtPlex India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
