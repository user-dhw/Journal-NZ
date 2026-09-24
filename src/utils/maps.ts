export function createGoogleMapsDirectionsUrl(
  origin: string,
  destination: string,
  waypoints: string[] = [],
): string {
  const params = new URLSearchParams({
    api: '1',
    origin,
    destination,
  })
  if (waypoints.length > 0) params.set('waypoints', waypoints.join('|'))
  return `https://www.google.com/maps/dir/?${params.toString()}`
}

export function createGoogleMapsLocationUrl(query: string): string {
  const params = new URLSearchParams({ api: '1', query })
  return `https://www.google.com/maps/search/?${params.toString()}`
}
