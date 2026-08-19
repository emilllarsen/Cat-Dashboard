const {
  VITE_API_PROTOCOL,
  VITE_API_HOSTNAME,
  VITE_API_VERSION,
  VITE_API_PORT,
} = import.meta.env;
const API_URL = `${VITE_API_PROTOCOL}://${VITE_API_HOSTNAME}:${VITE_API_PORT}/api/${VITE_API_VERSION}`;

export async function apiFetch(endpoint, options = {}) {
  const headers = {
    ...(options?.headers || {}),
    "Content-Type": "application/json",
  };
  const response = await fetch(API_URL + endpoint, {
    ...options,
    headers,
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error ||
        result?.errors[0].msg ||
        result?.err ||
        result?.msg ||
        result?.message ||
        "An error has occured....",
    );
  }
  return result;
}
