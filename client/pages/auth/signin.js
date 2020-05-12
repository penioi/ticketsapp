import { useState } from 'react';
import Router from 'next/router'
import useRequest from '../../hooks/use-request'

export default () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('parola');
  const { doRequest, errors } = useRequest({ url: '/api/users/signin', method: 'post', body: { email, password }, onSuccess: () => Router.push('/') });

  const onSubmit = async (e) => {
    e.preventDefault();
    doRequest();

  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      {errors && errors}
      <button className="btn btn-primary">Sign In</button>

    </form>
  );
};
