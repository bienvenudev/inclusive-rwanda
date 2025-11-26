// EmailJS Configuration
export const emailConfig = {
  serviceId: "service_th83hkp", // e.g., 'service_abc123'
  templateId: "template_mb4ytqp", // e.g., 'template_xyz789'
  publicKey: "MTnyHpw0XOom3zGwA", // e.g., 'user_def456'
};

// Email template variables to use in EmailJS template:
// {{user_name}} - User's name
// {{user_email}} - User's email address
// {{feedback_type}} - Type of feedback (question, challenge, suggestion, etc.)
// {{message}} - The feedback message content
// {{page_url}} - The URL of the page where feedback was submitted

// Sample email template for EmailJS:
/*
Subject: New Feedback from Inclusive Rwanda - {{feedback_type}}

Hello,

You received new feedback from your Inclusive Rwanda website:

Name: {{user_name}}
Email: {{user_email}}
Feedback Type: {{feedback_type}}
Page: {{page_url}}

Message:
{{message}}

---
This message was sent from the Inclusive Rwanda feedback form.
*/
