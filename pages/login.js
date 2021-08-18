import axios from 'axios';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

export default function Home() {

  const router = useRouter();

  const login = async event => {
    event.preventDefault();

    const payload = {
      identifier: event.target.email.value,
      password: event.target.password.value
    };

    await axios
      .post('http://localhost:1337/auth/local', payload)
      .then((res) => {
        console.log(res.data);

        setCookie(null, 'token', res.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/'
        });
        router.push('/success');
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div>
      <Layout header="Next.js" title="Login page.">
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Layout>
    </div>
  )
}
