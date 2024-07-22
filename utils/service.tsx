import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, create, deleteItem, update } from '@/utils/axios';
import { HOST_API } from '@/config-global';
// ----------------------------------------------------------------------
// Get
export function useList({ resource, params }: { resource: string; params?: any }) {
  const order = {};
  if (params?.order) {
    // eslint-disable-next-line no-restricted-syntax, no-unsafe-optional-chaining
    for (const iterator of params?.order) {
      Object.defineProperty(order, 'sort_by', {
        value: iterator.column,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(order, 'descending', {
        value: iterator.mode,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
  }

  const URL = [
    `${HOST_API}/${resource}`,
    { params: { ...params?.pagination, ...params?.other, ...order } },
  ];
  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: reload,
  } = useSWR(URL, fetcher, { revalidateOnFocus: false });

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      meta: data?.meta || {},
      isLoading,
      error,
      isValidating,
      empty: !isLoading && !data?.data?.length,
      reload,
    }),
    [data?.data, data?.meta, error, isLoading, isValidating, reload]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------
// Get One
export function useOne({ resource, id }: { resource: string; id: string | number | undefined }) {
  const URL = [`${HOST_API}/${resource}/${id}`];
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      isLoading,
      error,
      isValidating,
      empty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------
// Create
export function useCreate({
  resource,
  formData = false,
}: {
  resource: string;
  formData?: boolean;
}) {
  const URL = `${HOST_API}/${resource}`;

  return {
    addItem: (item: any) => mutate(URL, () => create(URL, item, formData)),
  };
}

// Update
export function useUpdate({
  resource,
  id,
  formData = false,
}: {
  resource: string;
  id: string | number | undefined;
  formData?: boolean;
}) {
  const URL = `${HOST_API}/${resource}/${id}`;

  return {
    updateItem: (item: any) => mutate(URL, () => update(URL, item, formData)),
  };
}

// Delete
export function useDelete({ resource }: { resource: string }) {
  const URL = `${HOST_API}/${resource}`;

  return {
    deleteItem: (id: string | number | undefined) => mutate(URL, () => deleteItem(`${URL}/${id}`)),
  };
}

// ----------------------------------------------------------------------
