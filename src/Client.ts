/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as AuthorizeClient } from "./resources/authorize/client/Client";
import { Client as MarketplaceClient } from "./resources/marketplace/client/Client";

export declare namespace MirrorworldApiClient {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      apiKey?: core.Supplier<string>;
    };
  }
}

export class MirrorworldApiClient {
  constructor(private readonly options: MirrorworldApiClient.Options) {}

  #authorize: AuthorizeClient | undefined;

  public get authorize(): AuthorizeClient {
    return (this.#authorize ??= new AuthorizeClient(this.options));
  }

  #marketplace: MarketplaceClient | undefined;

  public get marketplace(): MarketplaceClient {
    return (this.#marketplace ??= new MarketplaceClient(this.options));
  }
}
