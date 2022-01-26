import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { OperationDefinitionNode } from "graphql";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import { gqlRequest } from "./gqlRequest";

export const useSwrGql = <TData, TVariables, TError = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: SWRConfiguration<TData, TError> & {
    url?: string;
  }
): SWRResponse<TData, TError> =>
  useSWR<TData>(
    `${
      (document.definitions[0] as OperationDefinitionNode)?.name?.value
    }${JSON.stringify(variables)}`,
    () => gqlRequest(document, variables, options?.url),
    options
  );
