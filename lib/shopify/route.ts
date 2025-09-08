import { NextResponse } from "next/server"
import { getAccessToken, getLoginUrl, getLogoutUrl } from "@/lib/shopify/auth"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")
  const redirectUri = "http://localhost:3000/api/auth/shopify"

  // Step 1: If no code → redirect to login
  if (!code) {
    return NextResponse.redirect(getLoginUrl(redirectUri))
  }

  // Step 2: Exchange code for token
  const token = await getAccessToken(code, redirectUri)

  // Save in cookies (or session)
  const res = NextResponse.redirect("http://localhost:3000/account")
  res.cookies.set("shopify_customer_token", token.access_token, {
    httpOnly: true,
    secure: true,
    path: "/",
  })
  return res
}
