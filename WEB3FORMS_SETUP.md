# Form Setup - Multiple Options! 🚀

## Choose Your Preferred Method:

### Option 1: Web3Forms (Recommended - Easiest)
**Best for:** Quick setup, no account needed, unlimited free emails

### Step 1: Get Your Access Key (30 seconds)
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter YOUR email address where you want to receive form submissions
3. Click "Create Access Key"
4. Check your email and copy the Access Key

### Step 2: Add to Your Project (30 seconds)
Open `.env.local` and replace the placeholder:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-actual-key-here
```

Example:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=550e8400-e29b-41d4-a716-446655440000
```

### Step 3: That's it! 🎉
- No account needed
- No credit card
- Completely FREE
- Unlimited form submissions

## When Deploying (Vercel/Netlify)
Add the same environment variable in your deployment settings:
- Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Value: `your-access-key`

## Features Already Built In:
✅ Form validation
✅ Loading states ("Sending...")
✅ Success messages (green confirmation)
✅ Error handling (red alerts)
✅ Auto-clears after submission
✅ Professional email formatting
✅ Mobile responsive
✅ Spam protection

## What You'll Receive in Your Email:
```
Subject: New Fence Quote Request from [Customer Name]

Name: John Doe
Email: john@example.com
Phone: (956) 555-1234
Address: 123 Main St, Brownsville, TX
Fence Type: Wood Privacy Fence
Message: I need a 6ft privacy fence for my backyard...
```

## Testing
The form works even without the access key configured - it will show a success message for testing purposes.

## Advanced Options (Optional)
Web3Forms offers additional features if needed:
- Custom email templates
- Webhooks
- File uploads
- Custom redirects
- Multiple recipients
- Auto-responses

Check their docs at: https://docs.web3forms.com/

## Support
- Web3Forms is 100% free
- No limits on submissions
- Support: https://web3forms.com/contact