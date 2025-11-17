const PUBLIC = '/public';
const ADD_SLUG = '/add';
const UPDATE_SLUG = '/update';

export const LOGIN_SLUG = '/accounts/login';

//* Accounts
export const ACCOUNT_PATH = '/accounts';
export const ACCOUNT_REGISTER = ACCOUNT_PATH + '/register';
export const ACCOUNT_UPDATE = ACCOUNT_PATH + UPDATE_SLUG;
export const ACCOUNT_COUNT_PATH = ACCOUNT_PATH + '/count';
export const ACCOUNT_FETCH_ROLES = ACCOUNT_PATH + '/fetch-roles';
export const ACCOUNT_VERIFICATION_FIND_BY_TOKEN = ACCOUNT_PATH + PUBLIC + '/findEmailByToken';
export const ACCOUNT_REGISTER_USING_LINK = ACCOUNT_PATH + PUBLIC + '/register-form';
export const ACCOUNT_FORGOT_PASSWORD = ACCOUNT_PATH + PUBLIC + '/forgot-password';

//* Notifications
export const NOTIFICATIONS = '/notification';
export const NOTIFICATIONS_SEND_REGISTRATION_LINK = NOTIFICATIONS + PUBLIC + '/sendRegistrationLink';
export const NOTIFICATIONS_SEND_FORGOT_PASSWORD_LINK = NOTIFICATIONS + PUBLIC + '/sendForgotPasswordLink';

//* Residents
export const RESIDENTS_PATH = '/residents';
export const RESIDENTS_ADD = RESIDENTS_PATH + ADD_SLUG;
export const RESIDENTS_UPDATE = RESIDENTS_PATH + UPDATE_SLUG;
export const RESIDENTS_FIND_BY_NAME_AND_BIRTHDATE = RESIDENTS_PATH + '/name_birthdate';

//* Officials
export const OFFICIALS_PATH = '/officials';
export const OFFICIALS_ADD = OFFICIALS_PATH + ADD_SLUG;
export const OFFICIALS_UPDATE = OFFICIALS_PATH + UPDATE_SLUG;

//* Blotter
export const BLOTTER_PATH = '/blotter';
export const BLOTTER_ADD = BLOTTER_PATH + ADD_SLUG;
export const BLOTTER_UPDATE = BLOTTER_PATH + UPDATE_SLUG;

//* Complaint
export const COMPLAINT_PATH = '/complaint';

//* Disaster And Emergency
export const DAE_PATH = '/dae';

//* Health And Sanitation
export const HAS_PATH = '/has';

//* Incident
export const INCIDENT_PATH = '/incident';
