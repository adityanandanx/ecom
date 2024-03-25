import { ClerkExpressRequireAuth, StrictAuthProp } from "@clerk/clerk-sdk-node";

declare global {
  namespace Express {
    interface Request extends StrictAuthProp {}
  }
}

const authMiddleware = ClerkExpressRequireAuth;

export { authMiddleware };
