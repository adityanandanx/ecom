export {};

declare global {
  interface CustomJwtSessionClaims {
    role?: "admin" | "user";
  }
}
