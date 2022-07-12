import {Route, Routes} from 'react-router-dom';
import { AuthLayout } from '../components/auth/layouts/AuthLayout';
import { ConfirmEmail, Login, Register, ResetPassword } from '../components/auth/pages';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AuthLayout />} >
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='confirmEmail/:id' element={<ConfirmEmail />} />
            <Route path='resetPassword' element={<ResetPassword />} />
        </Route>
    </Routes>
  )
}
