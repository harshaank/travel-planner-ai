/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.12.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as access from "../access.js";
import type * as cleanup from "../cleanup.js";
import type * as email from "../email.js";
import type * as expenses from "../expenses.js";
import type * as feedback from "../feedback.js";
import type * as http from "../http.js";
import type * as images from "../images.js";
import type * as invite from "../invite.js";
import type * as InviteEmail from "../InviteEmail.js";
import type * as payments from "../payments.js";
import type * as plan from "../plan.js";
import type * as planSettings from "../planSettings.js";
import type * as razorpay from "../razorpay.js";
import type * as retrier from "../retrier.js";
import type * as token from "../token.js";
import type * as users from "../users.js";
import type * as weather from "../weather.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  access: typeof access;
  cleanup: typeof cleanup;
  email: typeof email;
  expenses: typeof expenses;
  feedback: typeof feedback;
  http: typeof http;
  images: typeof images;
  invite: typeof invite;
  InviteEmail: typeof InviteEmail;
  payments: typeof payments;
  plan: typeof plan;
  planSettings: typeof planSettings;
  razorpay: typeof razorpay;
  retrier: typeof retrier;
  token: typeof token;
  users: typeof users;
  weather: typeof weather;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
