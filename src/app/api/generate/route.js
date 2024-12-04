import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("myUrls");
    const collection = db.collection("shortlinks");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      });
    }

    // Insert the new document into the collection
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    // Check if insertion was successful
    if (!result.acknowledged) {
      throw new Error("Failed to insert into the database");
    }

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });
  } catch (error) {
    console.error("Error in /api/generate:", error);
    return Response.json({
      success: false,
      error: true,
      message: "Internal Server Error",
    });
  }
}
