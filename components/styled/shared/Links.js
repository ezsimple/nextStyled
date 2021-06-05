import { Link as link } from 'next/link';
import styled, { css } from 'styled-components';
import { color, activeColor } from '../Properties';
import { getValue } from '../Util';
import * as cs from '../CoreStyles';

const defaultStyle = css`
  text-decoration: ${(props) => props.textDecoration || 'none'}!important;
`;

export const A = styled.a`
  ${defaultStyle};
  ${cs.margin};
  ${cs.padding};
  display: ${(props) => props.display || 'inline-block'};
  color: ${(props) => color[props.fg] || color.black};
  ${/* cs.pseudo.hover */ ''};
  ${/* cs.pseudo.active */ ''};
  ${(props) => props.noti && cs.noti};
  ${(props) => props.notiNew && cs.notiNew};
`;

// CRA의 react-router-dom에서는 동작 합니다. 그러나 next/link 는 다른것 같습니다.
// export const Link = styled(link)`
//   ${defaultStyle};
//   ${cs.margin};
//   ${cs.padding};
//   display: ${(props) => props.display || 'inline-block'};
//   color: ${(props) => color[props.fg] || color.black};
//   ${/* cs.pseudo.hover */ ''};
//   ${/* cs.pseudo.active */ ''};
//   ${(props) => props.noti && cs.noti};
//   ${(props) => props.notiNew && cs.notiNew};
// `;
