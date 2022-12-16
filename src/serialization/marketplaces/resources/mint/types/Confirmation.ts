/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { MirrorworldApi } from "@fern-api/mirrorworld";
import * as core from "../../../../../core";

export const Confirmation: core.schemas.Schema<
  serializers.marketplaces.Confirmation.Raw,
  MirrorworldApi.marketplaces.Confirmation
> = core.schemas.enum_(["finalized", "confirmed"]);

export declare namespace Confirmation {
  type Raw = "finalized" | "confirmed";
}