/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { MirrorworldApi } from "@fern-api/mirrorworld";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      apiKey?: core.Supplier<string>;
    };
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async authorize(
    request: MirrorworldApi.AuthorizeRequest
  ): Promise<MirrorworldApi.authorize.authorize.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/oauth/authorize"),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
      },
      body: await serializers.AuthorizeRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async token(request: MirrorworldApi.TokenRequest): Promise<MirrorworldApi.authorize.token.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/oauth/token"),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
      },
      body: await serializers.TokenRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
