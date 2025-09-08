# EmailJS Setup Instructions

## The form is now functional! Follow these steps to receive emails:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a FREE account (200 emails/month free)

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Save your **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Fence Quote Request from {{from_name}}

**Content:**
```
You have received a new quote request from your website!

Customer Information:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Address: {{address}}

Project Details:
Fence Type: {{fence_type}}

Message:
{{message}}

---
Reply directly to this email to contact the customer.
```

4. Set "To Email" to your business email
5. Save and note your **Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Click "Integration" in the sidebar
2. Copy your **Public Key** (looks like: `AbCdEfGhIjKlMnOp`)

### Step 5: Update Your .env.local File
Replace the placeholder values with your actual IDs:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### Step 6: Deploy
When deploying to Vercel/Netlify, add these same environment variables in your deployment settings.

## Testing
The form works even without EmailJS configured - it will show a success message and log to console for testing.

## Current Form Features:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Auto-clear form after submission
- ✅ Fallback for development testing
- ✅ Professional email template
- ✅ Mobile responsive

## Support
- EmailJS Free Plan: 200 emails/month
- Need more? Upgrade to paid plan or integrate with your own backend