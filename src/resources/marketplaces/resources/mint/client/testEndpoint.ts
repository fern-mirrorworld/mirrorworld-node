/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { MirrorworldApi } from "@fern-api/mirrorworld";
import * as core from "../../../../../core";

export type Response = core.APIResponse<void, MirrorworldApi.marketplaces.mint.testEndpoint.Error>;
export type Error = MirrorworldApi.marketplaces.mint.testEndpoint.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: MirrorworldApi.marketplaces.mint.testEndpoint.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): MirrorworldApi.marketplaces.mint.testEndpoint.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<
      MirrorworldApi.marketplaces.mint.testEndpoint.Error._Unknown,
      "_visit"
    >;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: MirrorworldApi.marketplaces.mint.testEndpoint.Error._Unknown, visitor: MirrorworldApi.marketplaces.mint.testEndpoint.Error._Visitor<_Result>) {
      return MirrorworldApi.marketplaces.mint.testEndpoint.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: MirrorworldApi.marketplaces.mint.testEndpoint.Error,
    visitor: MirrorworldApi.marketplaces.mint.testEndpoint.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;