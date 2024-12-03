import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("myUrls");
    const collection = db.collection("shortlinks"); // Replace with your collection name

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists",
      });
    }
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });
  } catch (error) {}

  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully",
  });
}
