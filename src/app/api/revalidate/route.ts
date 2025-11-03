import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { model, entry } = body;

    switch (model) {
      case "post":
        revalidatePath("/");
        revalidatePath(`/post/${entry.slug}`);
        if (entry.category?.slug) {
          revalidatePath(`/category/${entry.category.slug}`);
        }
        break;
      case "category":
        revalidatePath(`/category/${entry.slug}`);
        break;
      case "tag":
        revalidatePath(`/tag/${entry.slug}`);
        break;
      case "author":
        revalidatePath(`/author/${entry.slug}`);
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
