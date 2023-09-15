import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryCLient = cache(() => new QueryClient());
export default getQueryCLient;
