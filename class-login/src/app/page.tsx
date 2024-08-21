import { UserProvider } from '@/class/user';
import { Form } from './components/form';

export default function Page() {
  return (
    <UserProvider>
      <div>
        <Form />
      </div>
    </UserProvider>
  );
}