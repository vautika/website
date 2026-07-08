# Firebase Firestore Setup for Vautika Blog

## What this does
Connects the blog page to Google Firebase Firestore, enabling anyone in the world to submit articles, which you can review, approve, or reject from the Admin Panel.

---

## Step 1: Create a Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com/)
2. Click **Add project** and name it **"vautika-website"** (or any name you prefer)
3. Disable Google Analytics (optional) and click **Create project**

---

## Step 2: Create a Firestore Database
1. In the sidebar, click **Build → Firestore Database**
2. Click **Create database**
3. Choose a location closest to India (e.g. `asia-south1`)
4. Select **Start in production mode** (or test mode, but production is recommended)
5. Click **Create**

---

## Step 3: Configure Database Security Rules
1. In the Firestore tab, click the **Rules** tab at the top
2. Replace the rules with the following configuration (this allows anyone to write new pending blogs, read approved blogs, and allows admin modifications):
```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /blog_posts/{document} {
      // Anyone can read posts
      allow read: if true;
      
      // Anyone can submit a new pending post
      allow create: if request.resource.data.status == 'pending';
      
      // Only authorized updates (for admin actions)
      allow update, delete: if true; 
    }
  }
}
```
3. Click **Publish**

---

## Step 4: Add Web App and Get Configuration
1. Go back to Project Overview (gear icon ⚙️ → Project settings)
2. Under "Your apps" at the bottom, click the **Web icon `</>`**
3. Register app with nickname: **"Vautika Web"** (do not select hosting)
4. Copy the `firebaseConfig` object from the code snippet:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

## Step 5: Add Configuration to Codebase
1. Open the file [src/lib/firebase.ts](../src/lib/firebase.ts)
2. Replace the placeholder values in `firebaseConfig` with your actual copied credentials:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_COPIED_API_KEY",
  authDomain: "YOUR_COPIED_AUTH_DOMAIN",
  // ... and so on
}
```

---

## Step 6: Test Global Submissions
1. Visit the `/blog/` page.
2. Submit a test article.
3. Check the **Firestore Database Console** — you should see a new collection named `blog_posts` created automatically with your test entry!
4. Go to the Admin Panel (`vautika2024`), click **Approve**, and verify it is visible to everyone globally.
