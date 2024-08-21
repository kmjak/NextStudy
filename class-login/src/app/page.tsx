import { UserProvider } from '@/class/user';
import { Form } from './components/form';

export default function Page() {
  return (
    <UserProvider>
      <div>
        <h1>ログイン</h1>
        <Form />
      </div>
    </UserProvider>
  );
}