import { auth } from "@/auth";

type Request = {
  api: string;
  option?: any;
  body?: any;
};

export default async function postDataAuth(request: Request) {
  const session: any = (await auth()) ?? { accessToken: "", refreshToken: "" };

  try {
    const accessToken = `Bearer ${session?.accessToken}`;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}${request.api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      redirect: "follow",
      ...request.option,
      body: request.body,
    });

    // Check if the response is not okay
    if (!res.ok) {
      return null;
    }

    // Parse and return the JSON response
    return await res.json();
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      `${process.env.NEXT_PUBLIC_API}${request.api}: ${errorMessage}`
    );
  }
}