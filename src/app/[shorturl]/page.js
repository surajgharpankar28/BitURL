import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  // Await params before accessing
  const { shorturl } = await params; // Accessing the shorturl properly after awaiting

  // Log shorturl for debugging
  console.log("Received shorturl:", shorturl);

  const client = await clientPromise;
  const db = client.db("myUrls");
  const collection = db.collection("shortlinks");

  // Ensure the database contains the document
  const doc = await collection.findOne({ shorturl: shorturl });

  if (doc) {
    let redirectUrl = doc.url;

    // Check if the URL doesn't already have http:// or https://
    if (!/^https?:\/\//i.test(redirectUrl)) {
      // Prepend http:// or https:// to make it a valid absolute URL
      redirectUrl = `https://${redirectUrl}`;
    }

    console.log("Redirecting to:", redirectUrl);
    redirect(redirectUrl); // Redirect to the original URL
  } else {
    console.log("Short URL not found, redirecting to home");
    redirect(`${process.env.NEXT_PUBLIC_HOST}`); // Fallback redirect
  }

  return <div>Redirecting...</div>;
}
