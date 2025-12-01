import { UseMutateFunction } from '@tanstack/react-query';
import { ErrorResponse, SuccessResponse } from '@/types/commonType';
import { FormState, LoginFormSchema } from '@/lib/definitions';
import { useContextTheme } from './hooks';
import { ResidentType } from '@/types/residentsType';
import { useEffect, useRef, useState } from 'react';
import { useSearch } from './useQuery';

export const useFullname = (data: ResidentType) => {
  const { firstname, middlename, lastname } = data;

  const checkMiddleName = middlename == undefined ? ' ' : ' ' + middlename + ' ';
  return firstname + checkMiddleName + lastname;
};

/**
 * * Login Method
 */
type onLoginProp = {
  e: React.FormEvent<HTMLFormElement>;
  mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>;
};

export const onLogin = (prop: onLoginProp): FormState => {
  const { e, mutate } = prop;
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const username = formData.get('username');
  const password = formData.get('password');

  const validateFields = LoginFormSchema.safeParse({
    username: username,
    password: password
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors
    };
  }

  mutate(formData);
  return {};
};

export const onSearchHook = () => {
  const [searchData, setSearchData] = useState<{ name: string; page: number; limit: number }>({
    name: null,
    page: 0,
    limit: 5
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useSearch(
    searchData.name,
    searchData.page,
    searchData.limit
  );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadMoreRef.current, hasNextPage, searchData.name]);

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, searchData, setSearchData };
};
