import { cookies } from "next/headers"

const clientId = process.env.SHOPIFY_CUSTOMER_CLIENT_ID!
const authUrl = process.env.SHOPIFY_CUSTOMER_AUTH_URL!
const tokenUrl = process.env.SHOPIFY_CUSTOMER_TOKEN_URL!
const logoutUrl = process.env.SHOPIFY_CUSTOMER_LOGOUT_URL!

/**
 * Redirect customer to Shopify login
 */
export function getLoginUrl(redirectUri: string) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email https://api.customers.com/auth/customer.read_customers",
  })
  return `${authUrl}?${params.toString()}`
}

/**
 * Exchange authorization code for token
 */
export async function getAccessToken(code: string, redirectUri: string) {
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
      code,
    }),
  })
  if (!res.ok) throw new Error("Failed to get token")
  return res.json()
}

/**
 * Logout
 */
export function getLogoutUrl(redirectUri: string) {
  return `${logoutUrl}?redirect_uri=${encodeURIComponent(redirectUri)}`
}
