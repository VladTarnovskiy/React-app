export function checkRouterQuery(element: string | string[] | undefined) {
  return Array.isArray(element) ? element[0] : element;
}
