import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Div, Flex } from '../components/styled/shared';
import { Nav } from '../components/route/Nav';

const onEnded = () => {
  console.log('학습을 마쳤습니다');
};

// 현재 진행상태 처리를 위해서는 ReactPlayer 컴포넌트를 사용해야 합니다.
const Video = () => {
  const file =
    'http://210.92.91.216:3333/videos/1.%20%ED%81%AC%EB%A1%AC%EC%84%A4%EC%B9%98%20%EB%B0%A9%EB%B2%95.mp4';
  return (
    <Div>
      <Nav />
      <ReactPlayer
        url={file}
        width="100%"
        controls={true}
        config={{
          file: {
            attributes: {
              onContextMenu: (e) => e.preventDefault(), // 마우스 오른쪽 버튼 금지
              disablePictureInPicture: true, // PIP모드 비활성화
              controlsList: 'nodownload', // 다운로드 메뉴 제거
            },
          },
        }}
        onEnded={() => onEnded()}
      />
    </Div>
  );
};

export default Video;
