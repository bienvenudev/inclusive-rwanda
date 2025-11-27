import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

interface FeedbackFormProps {
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    feedback_type: 'question',
    message: '',
    page_url: window.location.href
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Handle escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS configuration
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        formData,
        emailConfig.publicKey
      );
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Failed to send feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-gray-900 border border-gray-600 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Share Your Feedback</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-1"
            aria-label="Close feedback form"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
            <p className="text-gray-300">Your feedback has been submitted successfully. We appreciate your input!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-gray-300 text-sm">
              Help us improve Inclusive Rwanda by sharing your thoughts, questions, or challenges.
            </p>

            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-white mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-white mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              <p className="text-gray-400 text-xs mt-1">We'll use this to respond to your feedback if needed.</p>
            </div>

            <div>
              <label htmlFor="feedback_type" className="block text-sm font-medium text-white mb-2">
                Feedback Type *
              </label>
              <select
                id="feedback_type"
                name="feedback_type"
                value={formData.feedback_type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="question">Question</option>
                <option value="challenge">Accessibility Challenge</option>
                <option value="suggestion">Suggestion for Improvement</option>
                <option value="bug">Bug Report</option>
                <option value="resource">Resource Recommendation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                placeholder="Share your feedback, questions, or challenges in detail..."
              />
              <p className="text-gray-400 text-xs mt-1">
                Current page: {new URL(formData.page_url).pathname}
              </p>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">
                  Failed to send feedback. Please try again or contact us directly at b.cyuzuzo@alustudent.com
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;