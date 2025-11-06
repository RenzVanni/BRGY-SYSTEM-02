import { NOTIFICATIONS_SEND_REGISTRATION_LINK } from '@/constants/Backend_Slugs';

export const sendRegistrationLinkApi = async (email: string): Promise<{ message: string }> => {
  const query = encodeURIComponent(`${NOTIFICATIONS_SEND_REGISTRATION_LINK}?email=${email}`);

  const response = await fetch(`/api/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
