import { useRouter } from 'next/router';
import { Button, Flex } from '../styled/shared';
import { color } from '../styled/Properties';

export function Nav() {
  const router = useRouter();
  const bgColor = 'purple';

  return (
    <Flex mb={10}>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        onClick={() => router.push('/')}>
        홈페이지
      </Button>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        ml={5}
        onClick={() => router.push('/profile')}>
        프로파일
      </Button>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        ml={5}
        onClick={() => router.push('/question')}>
        질문
      </Button>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        ml={5}
        onClick={() => router.push('/goods')}>
        상품
      </Button>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        ml={5}
        onClick={() => router.push('/category')}>
        카테고리
      </Button>
      <Button
        fg="white"
        bg={bgColor}
        bc="black"
        ml={5}
        onClick={() => router.push('/video')}>
        비디오
      </Button>
    </Flex>
  );
}
