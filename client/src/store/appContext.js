import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  IS_CLIENT_REGISTERED,
  FORGOT_PASSWORD,
  HANDLE_CHANGE,
  VACANT_INPUT_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  SHOW_SIDE_BAR,
  LOGOUT_USER,
  CLEAR_ADDJOB_INPUT,
  GET_JOBS_SUCCESS,
  GET_JOBS_BEGIN,
  ADD_JOB_BEGIN,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILED,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  DELETE_JOB_SUCCESS,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_FAILED,
  DELETE_JOB_FAILED,
  EDIT_PROFILE_BEGIN,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  SHOW_STATS_SUCCESS,
  SHOW_STATS_BEGIN,
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

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const location = localStorage.getItem("location");

const initialState = {
  isRegistered: false,
  forgotPassword: false,
  isLoading: false,
  showAlert: false,
  alertType: null,
  alertText: "",
  name: "",
  email: "",
  password: "",
  user: user ? JSON.parse(user) : null,
  location: location ? location : "",
  token: token ? token : "",
  loginSuccess: false,
  showSideBarMenu: false,
  editJob: false,
  editJobId: null,
  company: "",
  position: "",
  status: "pending",
  statusOptions: ["pending", "interview", "declined"],
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  isJobPriority: false,
  priorityJobsCount: 0,
  jobLocation: location ? location : "",
  allJobs: [],
  priorityJobs: [],
  allJobsCount: 0,
  statusStats: {},
  monthlyApplications: [],
};

const AppContext = createContext(initialState);

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "api/v1",
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };

  const handleIsRegistered = () => {
    dispatch({ type: IS_CLIENT_REGISTERED });
  };

  const handleForgotPassword = () => {
    dispatch({ type: FORGOT_PASSWORD });
  };

  const handleChange = (name, value, type, checked) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value, type, checked } });
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2500);
  };

  const invalidInput = () => {
    dispatch({ type: VACANT_INPUT_ALERT });
    clearAlert();
  };

  //register user
  const register = async (userInfo) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await authFetch.post("/auth/register", userInfo);

      const { userObj, location, token } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { userObj, token, location },
      });
      addUserToLocalStorage({
        user: userObj,
        token: token,
        location: location,
      });
    } catch (error) {
      const errorMsg = error.response.data.msg;
      dispatch({ type: REGISTER_USER_FAILED, payload: { errorMsg } });
    }
    clearAlert();
  };

  //login user
  const login = async (userInfo) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await authFetch.post("/auth/login", userInfo);
      const { userObj, location, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { userObj, token, location },
      });
      addUserToLocalStorage({
        user: userObj,
        token: token,
        location: location,
      });
    } catch (error) {
      const errorMsg = error.response.data.msg;
      dispatch({ type: REGISTER_USER_FAILED, payload: { errorMsg } });
    }
    clearAlert();
  };

  //logout user
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  //show side bar
  const handleShowSideBarMenu = () => {
    dispatch({ type: SHOW_SIDE_BAR });
  };

  //get all jobs
  const getAllJobs = async (
    search = "",
    status = "all",
    jobType = "all",
    sort = "latest"
  ) => {
    dispatch({ type: GET_JOBS_BEGIN });
    const url = `/jobs?search=${search}&status=${status}&jobType=${jobType}&sort=${sort}`;
    try {
      const { data } = await authFetch.get(url);
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { count: data.count, jobs: data.jobs },
      });
    } catch (error) {
      logoutUser();
    }
  };

  //clear add job input
  const clearAddJobInput = () => {
    dispatch({ type: CLEAR_ADDJOB_INPUT });
  };

  //add a new job
  const addNewJob = async (reqObj) => {
    dispatch({ type: ADD_JOB_BEGIN });
    try {
      const { data } = await authFetch.post("/jobs", reqObj);
      dispatch({ type: ADD_JOB_SUCCESS, payload: { msg: data.msg } });
    } catch (error) {
      const msg = error.response.data.msg;
      dispatch({ type: ADD_JOB_FAILED, payload: { msg: msg } });
    }
    clearAlert();
  };

  //set edit job
  const setEditJob = (id) => {
    const jobToEdit = state.allJobs.find((item) => item._id.toString() === id);
    if (jobToEdit) {
      dispatch({
        type: SET_EDIT_JOB,
        payload: {
          company: jobToEdit.company,
          position: jobToEdit.position,
          jobType: jobToEdit.jobType,
          status: jobToEdit.status,
          jobLocation: jobToEdit.jobLocation,
          editJobId: id,
          isJobPriority: jobToEdit.isJobPriority,
        },
      });
    }
  };

  //add existing job
  const editExistingJob = async (reqObj) => {
    dispatch({ type: EDIT_JOB_BEGIN });
    const jobId = state.editJobId;
    try {
      const { data } = await authFetch.patch(`/jobs/${jobId}`, reqObj);
      dispatch({ type: EDIT_JOB_SUCCESS, payload: { msg: data.msg } });
    } catch (error) {
      const msg = error.response.data.msg;
      dispatch({ type: EDIT_JOB_FAILED, payload: { msg: msg } });
    }
    clearAlert();
  };

  //delete job
  const deleteJob = async (id) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      const { data } = await authFetch.delete(`/jobs/${id}`);
      dispatch({ type: DELETE_JOB_SUCCESS, payload: { msg: data.msg } });
      getAllJobs();
    } catch (error) {
      const msg = error.response.data.msg;
      dispatch({ type: DELETE_JOB_FAILED, payload: { msg: msg } });
    }
    clearAlert();
  };

  //edit profile
  const editProfile = async (reqObj) => {
    dispatch({ type: EDIT_PROFILE_BEGIN });

    try {
      const { data } = await authFetch.patch("/auth/updateUser", reqObj);
      const { user, location, token } = data;
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({
        user: user,
        token: token,
        location: location,
      });
    } catch (error) {
      const errorMsg = error.response.data.msg;
      dispatch({ type: EDIT_PROFILE_FAILED, payload: { msg: errorMsg } });
    }
    clearAlert();
  };

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch("/jobs/stats");
      const { pending, interview, declined } = data.defaultStats;
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          pending,
          interview,
          declined,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      const msg = error.response.data.msg;
      dispatch({ type: SHOW_STATS_FAILED, payload: { msg: msg } });
    }
  };

  const updatePassword = async (oldPassword, newPassword) => {
    dispatch({ type: UPDATE_PASSWORD_BEGIN });
    const reqObj = { newPass: newPassword, oldPass: oldPassword };
    try {
      const { data } = await authFetch.post("/auth/updatePassword", reqObj);
      const { userObj, location, token } = data;
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: { userObj, token, location },
      });
      addUserToLocalStorage({
        user: userObj,
        token: token,
        location: location,
      });
    } catch (error) {
      const errorMsg = error.response.data.msg;
      dispatch({ type: UPDATE_PASSWORD_FAILED, payload: { errorMsg } });
    }
    clearAlert();
  };

  const changeUserPicture = async (formData) => {
    dispatch({ type: UPLOAD_IMAGE_BEGIN });
    try {
      const { data } = await authFetch.post("/auth/uploadImage", formData);
      dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: { image: data.image } });
      const user = { ...state.user, image: data.image };
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      const msg = error.response.data.msg;
      dispatch({ type: UPLOAD_IMAGE_FAILED, payload: { msg: msg } });
    }
    clearAlert()
  };

  const getPriorityJobs = async () => {
    dispatch({ type: GET_PRIORITY_JOBS_BEGIN });
    const url = `/jobs?isJobPriority=${true}&sort=latest`;
    try {
      const { data } = await authFetch.get(url);
      dispatch({
        type: GET_PRIORITY_JOBS_SUCCESS,
        payload: { count: data.count, jobs: data.jobs },
      });
    } catch (error) {
      logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleIsRegistered,
        handleForgotPassword,
        handleChange,
        invalidInput,
        register,
        login,
        logoutUser,
        handleShowSideBarMenu,
        clearAddJobInput,
        addNewJob,
        editExistingJob,
        editProfile,
        getAllJobs,
        setEditJob,
        deleteJob,
        showStats,
        updatePassword,
        changeUserPicture,
        getPriorityJobs,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
