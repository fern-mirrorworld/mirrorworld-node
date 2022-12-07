/**
 * This file auto-generated by Fern from our API Definition.
 */

import { MirrorworldApi } from "@fern-api/mirrorworld";
import * as core from "../../../core";
import * as serializers from "../..";

export const ListNftResponse: core.schemas.ObjectSchema<ListNftResponse.Raw, MirrorworldApi.ListNftResponse> =
  core.schemas.object({
    data: core.schemas.lazyObject(async () => (await import("../..")).ListNftData),
    code: core.schemas.number(),
    error: core.schemas.string(),
    status: core.schemas.lazy(async () => (await import("../..")).ListNftStatus),
  });

export declare namespace ListNftResponse {
  interface Raw {
    data: serializers.ListNftData.Raw;
    code: number;
    error: string;
    status: serializers.ListNftStatus.Raw;
  }
}
