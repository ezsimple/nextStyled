import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Profile() {
  const router = useRouter();

  return (
    <div>
      <Header></Header>
      <p>Hello, my name is jake seo. I use next.js</p>
      <button onClick={() => router.push('./details/index3')}>
        상세 3번페이지
      </button>
    </div>
  );
}
