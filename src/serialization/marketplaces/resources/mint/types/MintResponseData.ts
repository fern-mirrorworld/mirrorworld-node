/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { MirrorworldApi } from "@fern-api/mirrorworld";
import * as core from "../../../../../core";

export const MintResponseData: core.schemas.ObjectSchema<
  serializers.marketplaces.MintResponseData.Raw,
  MirrorworldApi.marketplaces.MintResponseData
> = core.schemas.object({
  mintAddress: core.schemas.property("mint_address", core.schemas.string()),
  url: core.schemas.string(),
  updateAuthority: core.schemas.property("update_authority", core.schemas.string()),
  creatorAddress: core.schemas.property("creator_address", core.schemas.string()),
  name: core.schemas.string(),
  symbol: core.schemas.string(),
  sellerFeeBasisPoints: core.schemas.property("seller_fee_basis_points", core.schemas.number()),
  collection: core.schemas.string().optional(),
  signature: core.schemas.string(),
  status: core.schemas.string(),
});

export declare namespace MintResponseData {
  interface Raw {
    mint_address: string;
    url: string;
    update_authority: string;
    creator_address: string;
    name: string;
    symbol: string;
    seller_fee_basis_points: number;
    collection?: string | null;
    signature: string;
    status: string;
  }
}