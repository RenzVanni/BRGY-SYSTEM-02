export const getFullname = (firstname: string, middlename: string, lastname: string): string => {
  const checkMiddleName = middlename == null ? ' ' : ' ' + middlename + ' ';
  return firstname + checkMiddleName + lastname;
};
