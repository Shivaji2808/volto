/**
 * Action types.
 * @module constants/ActionTypes
 */

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_APIERROR = 'SET_APIERROR';
export const RESET_APIERROR = 'RESET_APIERROR';
export const COPY = 'COPY';
export const COPY_CONTENT = 'COPY_CONTENT';
export const CREATE_CONTENT = 'CREATE_CONTENT';
export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_USER = 'CREATE_USER';
export const CUT = 'CUT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_CONTENT = 'DELETE_CONTENT';
export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_USER = 'DELETE_USER';
export const EMAIL_NOTIFICATION = 'EMAIL_NOTIFICATION';
export const EMAIL_SEND = 'EMAIL_SEND';
export const EXPAND_TOOLBAR = 'EXPAND_TOOLBAR';
export const LINK_INTEGRITY_CHECK = 'LINK_INTEGRITY_CHECK';
export const INITIAL_PASSWORD = 'INITIAL_PASSWORD';
export const GET_BREADCRUMBS = 'GET_BREADCRUMBS';
export const GET_CONTENT = 'GET_CONTENT';
export const POST_CONTROLPANEL = 'POST_CONTROLPANEL';
export const GET_CONTROLPANEL = 'GET_CONTROLPANEL';
export const DELETE_CONTROLPANEL = 'DELETE_CONTROLPANEL';
export const UPDATE_CONTROLPANEL = 'UPDATE_CONTROLPANEL';
export const GET_DIFF = 'GET_DIFF';
export const GET_GROUP = 'GET_GROUP';
export const GET_HISTORY = 'GET_HISTORY';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_NAVIGATION = 'GET_NAVIGATION';
export const GET_PRINCIPALS = 'GET_PRINCIPALS';
export const GET_QUERYSTRING = 'GET_QUERYSTRING';
export const GET_QUERYSTRING_RESULTS = 'GET_QUERYSTRING_RESULTS';
export const CREATE_RELATIONS = 'CREATE_RELATIONS';
export const DELETE_RELATIONS = 'DELETE_RELATIONS';
export const LIST_RELATIONS = 'LIST_RELATIONS';
export const REBUILD_RELATIONS = 'REBUILD_RELATIONS';
export const GET_SCHEMA = 'GET_SCHEMA';
export const POST_SCHEMA = 'POST_SCHEMA';
export const PUT_SCHEMA = 'PUT_SCHEMA';
export const UPDATE_SCHEMA = 'UPDATE_SCHEMA';
export const DELETE_SCHEMA = 'DELETE_SCHEMA';
export const GET_SHARING = 'GET_SHARING';
export const GET_TRANSLATION_LOCATOR = 'GET_TRANSLATION_LOCATOR';
export const LINK_TRANSLATION = 'LINK_TRANSLATION';
export const DELETE_TRANSLATION = 'DELETE_TRANSLATION';
export const GET_TYPES = 'GET_TYPES';
export const GET_USER = 'GET_USER';
export const GET_VOCABULARY = 'GET_VOCABULARY';
export const GET_VOCABULARY_TOKEN_TITLE = 'GET_VOCABULARY_TOKEN_TITLE';
export const GET_WORKFLOW = 'GET_WORKFLOW';
export const GET_WORKFLOW_MULTIPLE = 'GET_WORKFLOW_MULTIPLE';
export const UPDATECOLUMNS_CONTENT = 'UPDATECOLUMNS_CONTENT';
export const INSTALL_ADDON = 'INSTALL_ADDON';
export const LIST_ACTIONS = 'LIST_ACTIONS';
export const LIST_ADDONS = 'LIST_ADDONS';
export const LIST_COMMENTS = 'LIST_COMMENTS';
export const LIST_MORE_COMMENTS = 'LIST_MORE_COMMENTS';
export const LIST_CONTROLPANELS = 'LIST_CONTROLPANELS';
export const LIST_GROUPS = 'LIST_GROUPS';
export const LIST_FILTER_GROUPS = 'LIST_FILTER_GROUPS';
export const LIST_ROLES = 'LIST_ROLES';
export const AUTH_ROLE = 'AUTH_ROLE';
export const LIST_USERS = 'LIST_USERS';
export const LOGIN = 'LOGIN';
export const LOGIN_RENEW = 'LOGIN_RENEW';
export const LOGOUT = 'LOGOUT';
export const ORDER_CONTENT = 'ORDER_CONTENT';
export const MOVE_CONTENT = 'MOVE_CONTENT';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const PURGE_MESSAGES = 'PURGE_MESSAGES';
export const RESET_SEARCH_CONTENT = 'RESET_SEARCH_CONTENT';
export const RESET_CONTENT = 'RESET_CONTENT';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const REVERT_HISTORY = 'REVERT_HISTORY';
export const REVERT_TRANSACTIONS = 'REVERT_TRANSACTIONS';
export const SEARCH_CONTENT = 'SEARCH_CONTENT';
export const SET_SIDEBAR_TAB = 'SET_SIDEBAR_TAB';
export const TRANSITION_WORKFLOW = 'TRANSITION_WORKFLOW';
export const UNINSTALL_ADDON = 'UNINSTALL_ADDON';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_SHARING = 'UPDATE_SHARING';
export const UPDATE_USER = 'UPDATE_USER';
export const UPGRADE_ADDON = 'UPGRADE_ADDON';
export const SYSTEM_INFORMATION = 'SYSTEM_INFORMATION';
export const DATABASE_INFORMATION = 'DATABASE_INFORMATION';
export const SET_BLOCKS_CLIPBOARD = 'SET_BLOCKS_CLIPBOARD';
export const RESET_BLOCKS_CLIPBOARD = 'RESET_BLOCKS_CLIPBOARD';
export const LOAD_LAZY_LIBRARY = 'LOAD_LAZY_LIBRARY';
export const GET_CONTEXT_NAVIGATION = 'GET_CONTEXT_NAVIGATION';
export const CREATE_WORKING_COPY = 'CREATE_WORKING_COPY';
export const APPLY_WORKING_COPY = 'APPLY_WORKING_COPY';
export const REMOVE_WORKING_COPY = 'REMOVE_WORKING_COPY';
export const LOCK_CONTENT = 'LOCK_CONTENT';
export const UNLOCK_CONTENT = 'UNLOCK_CONTENT';
export const ADD_RULE = 'ADD_RULE';
export const GET_RULES = 'GET_RULES';
export const ENABLE_RULES = 'ENABLE_RULES';
export const DISABLE_RULES = 'DISABLE_RULES';
export const APPLY_SUB_RULES = 'APPLY_SUB_RULES';
export const UNAPPLY_SUB_RULES = 'UNAPPLY_SUB_RULES';
export const REMOVE_RULES = 'REMOVE_RULES';
export const GET_CONTROLPANEL_RULES = 'GET_CONTROLPANEL_RULES';
export const GET_CONTROLPANEL_RULE = 'GET_CONTROLPANEL_RULE';
export const DELETE_CONTROLPANEL_RULE = 'DELETE_CONTROLPANEL_RULE';
export const ADD_CONTROLPANEL_RULE = 'ADD_CONTROLPANEL_RULE';
export const GET_CONTENT_RULES_EVENTS = 'GET_CONTENT_RULES_EVENTS';
export const ADD_NEW_CONTENT_RULE = 'ADD_NEW_CONTENT_RULE';
export const EDIT_CONTROLPANEL_RULE = 'EDIT_CONTROLPANEL_RULE';
export const DELETECONDITION_CONTROLPANEL_RULE =
  'DELETECONDITION_CONTROLPANEL_RULE';
export const ADDCONDITION_CONTROLPANEL_RULE = 'ADDCONDITION_CONTROLPANEL_RULE';
export const EDITCONDITION_CONTROLPANEL_RULE =
  'EDITCONDITION_CONTROLPANEL_RULE';
export const UPCONDITION_CONTROLPANEL_RULE = 'UPCONDITION_CONTROLPANEL_RULE';
export const DOWNCONDITION_CONTROLPANEL_RULE =
  'DOWNCONDITION_CONTROLPANEL_RULE';
export const DELETEACTION_CONTROLPANEL_RULE = 'DELETEACTION_CONTROLPANEL_RULE';
export const EDITACTION_CONTROLPANEL_RULE = 'EDITACTION_CONTROLPANEL_RULE';
export const ADDACTION_CONTROLPANEL_RULE = 'ADDACTION_CONTROLPANEL_RULE';
export const UPACTION_CONTROLPANEL_RULE = 'UPACTION_CONTROLPANEL_RULE';
export const DOWNACTION_CONTROLPANEL_RULE = 'DOWNACTION_CONTROLPANEL_RULE';
export const GETACTION_CONTROLPANEL_RULE = 'GETACTION_CONTROLPANEL_RULE';
export const GETCONDITION_CONTROLPANEL_RULE = 'GETCONDITION_CONTROLPANEL_RULE';
export const MOVE_CONTENT_RULE = 'MOVE_CONTENT_RULE';
export const GET_ALIASES = 'GET_ALIASES';
export const ADD_ALIASES = 'ADD_ALIASES';
export const REMOVE_ALIASES = 'REMOVE_ALIASES';
export const GET_USERSCHEMA = 'GET_USERSCHEMA';
export const GET_UPGRADE = 'GET_UPGRADE';
export const POST_UPGRADE = 'POST_UPGRADE';
