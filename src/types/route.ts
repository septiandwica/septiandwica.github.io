export type DynamicRouteParams<T extends Record<string, string>> = {
  params: Promise<T>;
};
