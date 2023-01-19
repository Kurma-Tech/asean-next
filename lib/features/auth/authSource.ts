import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  apiConfig,
  apiConfigWithAuth,
  apiPaths,
} from '../../core/constants/apiConstants';
import {
  AuthReponseType,
  GetUserReponseType,
  LoginRequestType,
  RegisterRequestType,
} from './authTypes';

export async function loginSource(
  requestData: LoginRequestType
): Promise<AuthReponseType> {
  try {
    const response: AxiosResponse = await axios.post(
      apiPaths.baseUrl + apiPaths.loginUrl,
      requestData,
      apiConfig
    );
    return response.data as AuthReponseType;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error('Login Failed');
  }
}

export async function getUserSource(
  token: string
): Promise<GetUserReponseType> {
  const response: AxiosResponse = await axios.get(
    apiPaths.baseUrl + apiPaths.getUserUrl,
    apiConfigWithAuth(token)
  );
  return response.data as GetUserReponseType;
}

export async function registerSource(
  requestData: RegisterRequestType
): Promise<AuthReponseType> {
  try {
    const response: AxiosResponse = await axios.post(
      apiPaths.baseUrl + apiPaths.registerUrl,
      requestData,
      apiConfig
    );

    return response.data as AuthReponseType;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error('Register Failed');
  }
}
