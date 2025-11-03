import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://opus-production-3e99.up.railway.app/graphql",
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        skipTypename: false,
        enumsAsTypes: true,
        maybeValue: "T | null",
        strict: true,
        defaultScalarType: "unknown",
        immutableTypes: true,
        scalars: {
          DateTime: "string",
          JSON: "Record<string, unknown>",
          Upload: "File",
        },
      },
    },
    "src/graphql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
