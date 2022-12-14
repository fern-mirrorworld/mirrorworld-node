/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../environments";
import * as core from "../../../../../core";
import { MirrorworldApi } from "@fern-api/mirrorworld";
import urlJoin from "url-join";
import * as serializers from "../../../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    apiKey?: core.Supplier<string>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async bindPaymentCode(
    request: MirrorworldApi.authentication.BindPaymentCodeRequest
  ): Promise<MirrorworldApi.authentication.transactionApproval.bindPaymentCode.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        "/v1/auth/security/bind-payment-code"
      ),
      method: "POST",
      headers: {
        "X-API-Key": await core.Supplier.get(this.options.apiKey),
      },
      body: await serializers.authentication.transactionApproval.bindPaymentCode.Request.json({
        securityCode: request.securityCode,
        confirmSecurityCode: request.confirmSecurityCode,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.authentication.transactionApproval.bindPaymentCode.Response.parse(
          _response.body as serializers.authentication.transactionApproval.bindPaymentCode.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: MirrorworldApi.authentication.transactionApproval.bindPaymentCode.Error._unknown(_response.error),
    };
  }
}
