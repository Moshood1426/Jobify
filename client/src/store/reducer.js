import {
  CLEAR_ALERT,
  FORGOT_PASSWORD,
  HANDLE_CHANGE,
  IS_CLIENT_REGISTERED,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  VACANT_INPUT_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  SHOW_SIDE_BAR,
  LOGOUT_USER,
  CLEAR_ADDJOB_INPUT,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  ADD_JOB_BEGIN,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILED,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  DELETE_JOB_SUCCESS,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_FAILED,
  EDIT_PROFILE_BEGIN,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  SHOW_STATS_FAILED,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPDATE_PASSWORD_BEGIN,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
  GET_PRIORITY_JOBS_BEGIN,
  GET_PRIORITY_JOBS_SUCCESS,
  UPLOAD_IMAGE_FAILED,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === IS_CLIENT_REGISTERED) {
    return {
      ...state,
      isRegistered: !state.isRegistered,
    };
  }
  if (action.type === FORGOT_PASSWORD) {
    return {
      ...state,
      forgotPassword: !state.forgotPassword,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]:
        action.payload.type === "checkbox"
          ? action.payload.checked
          : action.payload.value,
    };
  }
  if (action.type === VACANT_INPUT_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Kindly input all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: null,
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN || action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (
    action.type === REGISTER_USER_SUCCESS ||
    action.type === LOGIN_USER_SUCCESS
  ) {
    return {
      ...state,
      isLoading: false,
      loginSuccess: true,
      token: action.payload.token,
      user: action.payload.userObj,
      location: action.payload.location,
      password: "",
      showAlert: true,
      alertType: "success",
      alertText: "Login Succesful, redirecting...",
    };
  }
  if (
    action.type === REGISTER_USER_FAILED ||
    action.type === LOGIN_USER_FAILED
  ) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.errorMsg,
    };
  }
  if (action.type === SHOW_SIDE_BAR) {
    return {
      ...state,
      showSideBarMenu: !state.showSideBarMenu,
    };
  }
  if (action.type === LOGOUT_USER) {
    const initialState = {
      isRegistered: false,
      isLoading: false,
      name: "",
      email: "",
      user: null,
      location: "",
      password: "",
      token: "",
      loginSuccess: false,
      showSideBarMenu: false,
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CLEAR_ADDJOB_INPUT) {
    return {
      ...state,
      editJob: false,
      company: "",
      position: "",
      status: "pending",
      jobType: "full-time",
      jobLocation: state.location,
      isJobPriority: false,
    };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      allJobs: action.payload.jobs,
      allJobsCount: action.payload.count,
    };
  }
  if (action.type === ADD_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "success",
      editJob: false,
      company: "",
      position: "",
      jobType: "full-time",
      status: "pending",
      jobLocation: state.location,
    };
  }
  if (action.type === ADD_JOB_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === SET_EDIT_JOB) {
    return {
      ...state,
      editJob: true,
      company: action.payload.company,
      position: action.payload.position,
      jobType: action.payload.jobType,
      status: action.payload.status,
      jobLocation: action.payload.jobLocation,
      editJobId: action.payload.editJobId,
      isJobPriority: action.payload.isJobPriority,
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === DELETE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Something went wrong, Try again later...",
    };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "success",
      editJob: false,
      company: "",
      position: "",
      jobType: "full-time",
      status: "pending",
      jobLocation: state.location,
      editJobId: null,
    };
  }
  if (action.type === EDIT_JOB_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === EDIT_PROFILE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_PROFILE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      location: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Your profile was succesfully edited",
    };
  }
  if (action.type === EDIT_PROFILE_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      statusStats: {
        pending: action.payload.pending,
        interview: action.payload.interview,
        declined: action.payload.declined,
      },
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === SHOW_STATS_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === UPLOAD_IMAGE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPLOAD_IMAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: {
        ...state.user,
        image: action.payload.image,
      },
    };
  }
  if (action.type === UPLOAD_IMAGE_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === UPDATE_PASSWORD_BEGIN) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_PASSWORD_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.userObj,
      location: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Password succesfully changed",
    };
  }
  if (action.type === UPDATE_PASSWORD_FAILED) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.errorMsg,
    };
  }
  if (action.type === GET_PRIORITY_JOBS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_PRIORITY_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      priorityJobs: action.payload.jobs,
      priorityJobsCount: action.payload.count,
    };
  }
  throw new Error("action cannot be found");
};

export default reducer;
