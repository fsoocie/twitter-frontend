import {axios} from "../../core/axios";
import { ILoginFormProps } from "../../pages/SignIn/components/LoginModal";

interface IResponseData {
  status: 'error' | 'success',
  data: any
}

export const authApi = {
  async signIn(postData: ILoginFormProps): Promise<IResponseData> {
    const {data} = await axios.post('./auth/login', {username: postData.email, password: postData.password})
    return data
  }
}
