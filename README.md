# **BitURL - The URL Shortener**

A simple web application to generate short, easy-to-share links from long URLs. Built with **Next.js**, it provides a seamless user experience with loading indicators, error validation, and a polished UI.

---
### Live Demo - [BitURL](https://biturls.vercel.app/)
---
## **Features**
- **Real-time URL validation**: Ensures only valid URLs are accepted.
- **Short URL generation**: Converts long URLs into short, shareable links.
- **Error handling**: Displays user-friendly error messages.
- **Loading indicator**: Shows a progress bar while processing requests.
- **Responsive design**: Fully optimized for various screen sizes.

---

## **Tech Stack**
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend API**: Next.js API routes.
- **Database**: MongoDB Atlas for storing original and short URLs.
- **UUID**: For generating unique short URL identifiers.
- **Styling**: Tailwind CSS for responsive and modern UI.

---

## **Getting Started**

### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js (v14 or above)
- npm or yarn
- MongoDB Atlas account (or a local MongoDB instance)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/surajgharpankar28/BitURL.git
   cd BitURL
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_HOST=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## **Usage**
1. Enter the original URL in the input field.
2. Click **"Make Short"** to generate a short link.
3. Copy and share the generated short URL.
4. Use the **"Clear"** button to reset the form.

---

## **Project Structure**
```
├── pages/
│   ├── api/
│   │   └── generate.js   # API route for short URL creation
│   ├── _app.js          # Application entry point
│   └── index.js         # Main UI
├── styles/              # Tailwind CSS configuration
├── components/          # Reusable components (if any)
├── public/              # Static assets
├── .env.local           # Environment variables
├── README.md            # Project documentation
└── package.json         # Project dependencies and scripts
```

---

## **API Endpoints**

### **POST /api/generate**
**Description**: Creates a short URL for a given original URL.  
**Request Body**:
```json
{
  "url": "https://example.com",
  "shorturl": "abc123"
}
```
**Response**:
```json
{
  "success": true,
  "shorturl": "http://localhost:3000/abc123"
}
```

---

## **Future Enhancements**
- Analytics for tracking URL clicks.
- Custom short URL naming.
- User authentication for personalized short links.


---

Let me know if you'd like to tweak this further or add more sections! 🚀