import Axios, {
  AxiosInstance,
} from 'axios';

export abstract class BaseApiService {
  public http!: AxiosInstance;

  constructor(
    // TODO: Don't forget about baseUrl
    baseUrl: string = '',
  ) {
    this.http = Axios.create({
      baseURL: baseUrl,
    });
    // this.http.defaults.headers.common.Accept = 'application/json';
    this.http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    this.http.interceptors.response.use(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (response: any) => response,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (error: any) => Promise.reject(error.response)
    );
  }
}
