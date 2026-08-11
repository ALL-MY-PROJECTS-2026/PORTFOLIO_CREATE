/**
 * starfield / react.jsx
 */

import React, { forwardRef } from 'react';
import { useFx, mergeRefs } from '../_core/react.js';
import { mount } from './index.js';

import '../_core/core.css';
import './style.css';

/** 훅 버전 — 컨테이너에 .fx-starfield 클래스를 꼭 주세요. */
export function useStarfield(options, deps = []) {
  return useFx(mount, options, deps);
}

/**
 * <Starfield as="section" density={1.4} twinkle={0.7}>
 *   <h1>Night</h1>
 * </Starfield>
 */
export const Starfield = forwardRef(function Starfield(
  { as: Tag = 'section', children, className = '', deps = [], density, speed, twinkle, size, color, ...rest },
  outerRef
) {
  const ref = useStarfield({ density, speed, twinkle, size, color }, deps);
  return (
    <Tag ref={mergeRefs(ref, outerRef)} className={`fx-starfield ${className}`} {...rest}>
      {children}
    </Tag>
  );
});
