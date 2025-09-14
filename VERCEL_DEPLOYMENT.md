# Vercel Deployment - Environment Variables Setup

## Fix the Environment Variable Error

### Step 1: Add Environment Variables in Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Click on your project (fence website)
3. Click on **"Settings"** tab at the top
4. Click on **"Environment Variables"** in the left sidebar
5. Add the following variable:

   **Key:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

   **Value:**
   - If you have a Web3Forms key: Add your actual key
   - If you don't have one yet: Add `YOUR_ACCESS_KEY_HERE` temporarily

   **Environment:** Select all (Production, Preview, Development)

6. Click **"Save"**

### Step 2: Get Your Web3Forms Access Key (if you haven't already)

1. Go to https://web3forms.com/
2. Enter your email address
3. Click "Get Access Key"
4. Check your email for the key
5. Go back to Vercel and update the environment variable with your actual key

### Step 3: Redeploy Your Application

After adding the environment variable:

1. Go to the **"Deployments"** tab in Vercel
2. Click on the three dots (...) next to your latest deployment
3. Click **"Redeploy"**
4. Click **"Redeploy"** again in the confirmation dialog

OR simply push a new commit to trigger a redeploy:

```bash
git commit --allow-empty -m "Trigger Vercel redeploy"
git push
```

## Alternative: Use Development Mode (No Key Required)

If you want to deploy without setting up Web3Forms immediately, you can modify the environment variable to use the fallback mode:

In Vercel Environment Variables, add:
- **Key:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- **Value:** `YOUR_ACCESS_KEY_HERE`

This will make the forms work in development mode (logs to console) without actually sending emails.

## All Environment Variables Your Site Uses

Here's the complete list to add in Vercel:

| Key | Value | Required | Description |
|-----|--------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Your Web3Forms key or `YOUR_ACCESS_KEY_HERE` | Yes | For form submissions |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Your Google Maps key or `YOUR_API_KEY_HERE` | Optional | For map display |
| `NEXT_PUBLIC_USE_VERCEL_API` | `false` | Optional | Set to `true` to use API route |

## Quick Fix (Temporary)

For immediate deployment without email functionality:

1. In Vercel Environment Variables, add:
   - Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: `YOUR_ACCESS_KEY_HERE`
2. Redeploy

This will make your site deploy successfully. Forms will work but won't send emails until you add a real Web3Forms key.

## Verification

After redeployment:
1. Visit your site
2. Open browser console (F12)
3. Submit a form
4. You should see either:
   - Success message (if Web3Forms is configured)
   - Console log with form data (if in dev mode)

## Need Help?

- Vercel Environment Variables Guide: https://vercel.com/docs/environment-variables
- Web3Forms: https://web3forms.com/
- Check deployment logs in Vercel Dashboard > Functions tab