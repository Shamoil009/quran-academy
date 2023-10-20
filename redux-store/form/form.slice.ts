import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IformState } from "./form.types";
import axiosInstance from "@/config/axios";

const initialState: IformState = {
  form: [],
  singleForm: {
    id: 0,
    fullName: "",
    email: "",
    number: "",
    country: "",
    gender: "",
    courses: "",
    approved: false,
  },
  formError: {},
  formSuccessMesssage: "",
  isFormActivityInProgress: false,
};

// get all form
export const getAllForm = createAsyncThunk(
  "getAllForm/form",
  async (page:any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get(`/user/get-data/${page}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  },
);

//create new company
export const createForm = createAsyncThunk(
  "createCompany/company",
  async (company: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post(
        "/companies/add-company",
        company,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  },
);

//update company
export const updateForm = createAsyncThunk(
  "updateCompany/company",
  async ({ companyForm, companyId, thumbnail }: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().put(
        `/companies/update-company/${companyId}`,
        {
          companyName: companyForm.companyName,
          contactPerson: companyForm.contactPerson,
          companyLogo: thumbnail,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  },
);

const formSlice = createSlice({
  name: "formSlice",
  initialState: { ...initialState, name: "formInitialState" },
  reducers: {
    errorCleanUp: (state) => {
      state.formError = {
        code: null,
        message: "",
        error: "",
      };
    },
    messageCleanUp: (state) => {
      state.formSuccessMesssage = "";
    },
    formsCleanUp: (state) => {
      state.form = [];
    },
    formClean: (state) => {
      state.singleForm = {
        id: 0,
        fullName: "",
        email: "",
        number: "",
        country: "",
        gender: "",
        courses: "",
        approved: false,
      };
    },
  },
  extraReducers: (builder) => {
    //get all form
    builder
      .addCase(getAllForm.pending, (state, action: any) => {
        state.isFormActivityInProgress = true;
      })
      .addCase(getAllForm.rejected, (state, action: any) => {
        state.isFormActivityInProgress = false;
        state.formError = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      })
      .addCase(getAllForm.fulfilled, (state, action: any) => {
        state.isFormActivityInProgress = false;
        state.formError = action.payload.message;
        state.form = action.payload.formData.rows;
        state.numberOfPages = action.payload.numberOfPages;
        state.count = action.payload.formData.count;
      });
    //add new company
    builder
      .addCase(createForm.pending, (state, action: any) => {
        state.isFormActivityInProgress = true;
      })
      .addCase(createForm.rejected, (state, action: any) => {
        state.isFormActivityInProgress = false;
        state.formError = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      })
      .addCase(createForm.fulfilled, (state, action: any) => {
        state.isFormActivityInProgress = false;
        state.formSuccessMesssage = action.payload.message;
        state.singleForm = action.payload.company;
      });
    //update company
    builder
      .addCase(updateForm.pending, (state, action: any) => {
        state.isFormActivityInProgress = true;
      })
      .addCase(updateForm.rejected, (state, action: any) => {
        state.isFormActivityInProgress = false;
        console.log(action);

        state.formError = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      })
      .addCase(updateForm.fulfilled, (state, action: any) => {
        state.isFormActivityInProgress = false;
        state.formSuccessMesssage = action.payload.message;
      });
  },
});

export const { errorCleanUp, messageCleanUp, formsCleanUp, formClean } =
  formSlice.actions;

export default formSlice.reducer;
