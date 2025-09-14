# Web3Forms Setup Guide

This guide will help you set up Web3Forms to make your contact forms work properly.

## Quick Setup (5 minutes)

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address where you want to receive form submissions
3. Click "Get Access Key"
4. Check your email - you'll receive your access key instantly (no signup required!)

### Step 2: Add Your Access Key

1. Open the `.env.local` file in your project root
2. Find this line:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with the access key you received via email
4. Save the file

### Step 3: Restart Your Development Server

```bash
npm run dev
# or
yarn dev
```

## That's It! 🎉

Your forms are now ready to receive submissions. When someone fills out a form on your website:
- You'll receive an email instantly
- The form will show a success message
- User data is never stored on any servers

## How It Works

Both the desktop and mobile forms are configured to:
1. First try to use Web3Forms if an access key is configured
2. Fall back to the Vercel API route if deployed on Vercel
3. In development mode without a key, it logs to the console

## Form Locations

- **Desktop Form**: `components/QuoteSection.tsx`
- **Mobile Form**: `components/AppQuoteSection.tsx`
- **API Route**: `app/api/contact/route.ts`

## Testing Your Forms

1. Fill out any form on your website
2. Submit it
3. Check your email - you should receive the submission instantly
4. If you don't receive it, check your spam folder

## Features

✅ **No Backend Required** - Works directly from the browser
✅ **Instant Delivery** - Emails arrive in seconds
✅ **Spam Protection** - Built-in bot detection
✅ **100% Free** - No credit card required
✅ **Privacy Focused** - No data storage
✅ **Custom Styling** - Keep your design

## Customization

### Change Email Subject
Edit the subject line in the form components:
```javascript
subject: `New Fence Quote Request from ${formData.name}`
```

### Add More Fields
Add new fields to the form and they'll automatically be included in the email.

### Multiple Recipients
Web3Forms Pro supports multiple recipients, CC, BCC, and more.

## Alternative Options

If you prefer not to use Web3Forms, you can:

1. **Use Vercel Functions**: Set `NEXT_PUBLIC_USE_VERCEL_API=true` in `.env.local`
2. **Integrate SendGrid/Resend**: Add API keys to `.env.local` and update `app/api/contact/route.ts`
3. **Use a Database**: Store submissions in Vercel Postgres or another database

## Troubleshooting

### Forms Not Sending?
- Check that your access key is correctly added to `.env.local`
- Make sure you restarted the development server after adding the key
- Check browser console for any errors

### Not Receiving Emails?
- Check your spam/junk folder
- Verify the email address you used to get the access key
- Make sure the access key is valid

### Need Help?
- Web3Forms Documentation: https://web3forms.com/docs
- Check the console for error messages
- The forms will work in development mode even without a key (console logging only)

## Security Note

The access key in `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is safe to expose in the browser. Web3Forms is designed to work from the client-side, and the access key is tied to your specific email address.