# Form Setup Guide - Multiple Options! 🚀

Your form is ready to work with multiple services. Choose the one that fits your needs:

## Option 1: Web3Forms (Recommended - Easiest) ✨
**Best for:** Quick setup, no account needed, unlimited free emails

### Setup (1 minute):
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter YOUR email address
3. Click "Create Access Key"
4. Check your email and copy the key
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```

**Pros:**
- ✅ 100% FREE forever
- ✅ No signup required
- ✅ Unlimited submissions
- ✅ Works instantly

---

## Option 2: Vercel API Route (Built-in) 🚀
**Best for:** Vercel deployments, server-side processing, custom integrations

### Setup:
1. In `.env.local`, set:
   ```
   NEXT_PUBLIC_USE_VERCEL_API=true
   ```

2. Deploy to Vercel - it works automatically!

3. (Optional) Add email service in `/app/api/contact/route.ts`:
   - **Resend** (Vercel's partner): 
     ```
     RESEND_API_KEY=your-key
     ```
   - **SendGrid**:
     ```
     SENDGRID_API_KEY=your-key
     ```
   - **Postmark**:
     ```
     POSTMARK_API_KEY=your-key
     ```

**Pros:**
- ✅ Works on Vercel automatically
- ✅ Server-side processing
- ✅ Can integrate with databases
- ✅ More control over email formatting

**How it works:**
- Form submissions go to `/api/contact`
- Logged in Vercel Functions logs
- Can forward to any email service
- Can save to database

---

## Option 3: Direct Client Submission
**Best for:** Development/testing

The form works even without any configuration:
- Shows success messages
- Logs to browser console
- Perfect for testing

---

## Deployment Instructions

### For Vercel:
Add these environment variables in Vercel dashboard:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
# OR
NEXT_PUBLIC_USE_VERCEL_API=true
```

### For Netlify:
Add environment variables in Netlify dashboard:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

---

## Testing Your Form

1. **Development**: Works without configuration (console logging)
2. **With Web3Forms**: Emails sent to your inbox
3. **With Vercel API**: Check Vercel Functions logs

---

## Email Format You'll Receive

```
Subject: New Fence Quote Request from John Doe

Name: John Doe
Email: john@example.com
Phone: (956) 555-1234
Address: 123 Main St, Brownsville, TX
Fence Type: Wood Privacy Fence
Message: I need a 6ft privacy fence for my backyard...
```

---

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify environment variables are set
- Make sure to restart dev server after changing .env.local

**Not receiving emails?**
- Check spam folder
- Verify email address in Web3Forms
- Check Vercel Functions logs if using API route

---

## Support Links

- **Web3Forms**: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- **Vercel Functions**: [https://vercel.com/docs/functions](https://vercel.com/docs/functions)
- **Resend**: [https://resend.com/docs](https://resend.com/docs)
- **SendGrid**: [https://docs.sendgrid.com/](https://docs.sendgrid.com/)