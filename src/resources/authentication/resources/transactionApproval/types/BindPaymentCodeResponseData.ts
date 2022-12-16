/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { MirrorworldApi } from "@fern-api/mirrorworld";

export interface BindPaymentCodeResponseData {
  id: number;
  ethAddress: string;
  solAddress: string;
  email: string;
  emailVerified: boolean;
  username: string;
  wallet: MirrorworldApi.authentication.Wallet;
  createdAt: string;
  updatedAt: string;
}
