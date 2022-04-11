import * as Yup from 'yup';
import { cn } from '@bem-react/classname';
import { useForm, yupResolver } from '@mantine/form';
import { TextInput, PasswordInput, Button, Box, Group } from '@mantine/core';

import './SignupForm.scss';

const blk = cn('SignupForm');

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain latin letters.'),
});

export const SignupForm = () => {
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <Box className={blk()} mx='auto'>
      <form
        className={blk('Form')}
        method='post'
        onSubmit={form.onSubmit(values => console.log(values))}
      >
        <TextInput
          required
          label='Email'
          placeholder='example@mail.com'
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label='Name'
          placeholder='John Doe'
          mt='sm'
          {...form.getInputProps('name')}
        />
        <PasswordInput
          required
          label='Password'
          placeholder='password'
          mt='sm'
          {...form.getInputProps('password')}
        />

        <Group position='right' mt='xl'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignupForm;
