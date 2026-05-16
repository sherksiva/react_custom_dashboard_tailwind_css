import { useState, useCallback, useEffect } from 'react';

export interface ApiState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

export interface UseApiReturn<T> extends ApiState<T> {
  fetchData: (url: string, options?: RequestOptions) => Promise<T | undefined>;
  get: (url: string, options?: RequestOptions) => Promise<T | undefined>;
  post: (url: string, body?: unknown, options?: RequestOptions) => Promise<T | undefined>;
  put: (url: string, body?: unknown, options?: RequestOptions) => Promise<T | undefined>;
  delete: (url: string, options?: RequestOptions) => Promise<T | undefined>;
}

function normalizeOptions(options?: RequestOptions): RequestInit | undefined {
  if (!options) {
    return undefined;
  }

  const normalized: RequestInit = { ...(options as RequestInit) };

  if (options.body !== undefined && options.body !== null) {
    const isFormData = options.body instanceof FormData;
    const isBlob = options.body instanceof Blob;
    const isString = typeof options.body === 'string';

    if (!isFormData && !isBlob && !isString) {
      normalized.body = JSON.stringify(options.body);
      normalized.headers = {
        'Content-Type': 'application/json',
        ...(options.headers ?? {}),
      };
    }
  }

  return normalized;
}

async function apiRequest<T>(url: string, options?: RequestOptions): Promise<T> {
  const response = await fetch(url, normalizeOptions(options));

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export function useApi<T = unknown>(initialUrl?: string, initialOptions?: RequestOptions, autoFetch = false): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (url: string, options?: RequestOptions): Promise<T | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiRequest<T>(url, options);
      setData(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
      return undefined;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(
    (url: string, options?: RequestOptions) => fetchData(url, { ...options, method: 'GET' }),
    [fetchData],
  );

  const post = useCallback(
    (url: string, body?: unknown, options?: RequestOptions) =>
      fetchData(url, { ...options, method: 'POST', body }),
    [fetchData],
  );

  const put = useCallback(
    (url: string, body?: unknown, options?: RequestOptions) =>
      fetchData(url, { ...options, method: 'PUT', body }),
    [fetchData],
  );

  const deleteRequest = useCallback(
    (url: string, options?: RequestOptions) => fetchData(url, { ...options, method: 'DELETE' }),
    [fetchData],
  );

  useEffect(() => {
    if (autoFetch && initialUrl) {
      fetchData(initialUrl, initialOptions);
    }
  }, [autoFetch, initialUrl, initialOptions, fetchData]);

  return {
    data,
    error,
    loading,
    fetchData,
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
