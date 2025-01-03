import { getRequestEvent } from "solid-js/web";

/**
 * Hook to access Cloudflare context from the server request event.
 * Must be called within a server request context.
 *
 * @throws If called outside of a request event context
 * @returns Cloudflare context from the request event
 */
export function useServerContext() {
  const requestEvent = getRequestEvent();
  if (!requestEvent) {
    throw new Error("useServerContext() called outside of a request event");
  }

  return requestEvent.nativeEvent.context.cloudflare;
}
