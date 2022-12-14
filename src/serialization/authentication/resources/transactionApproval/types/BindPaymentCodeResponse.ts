/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { MirrorworldApi } from "@fern-api/mirrorworld";
import * as core from "../../../../../core";

export const BindPaymentCodeResponse: core.schemas.ObjectSchema<
  serializers.authentication.BindPaymentCodeResponse.Raw,
  MirrorworldApi.authentication.BindPaymentCodeResponse
> = core.schemas.object({
  data: core.schemas.lazyObject(async () => (await import("../../../..")).authentication.BindPaymentCodeResponseData),
});

export declare namespace BindPaymentCodeResponse {
  interface Raw {
    data: serializers.authentication.BindPaymentCodeResponseData.Raw;
  }
}
