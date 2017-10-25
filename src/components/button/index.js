import React, { Component } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: #00823b;
  border: none;
  box-shadow: 0 2px 0 #003618;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  line-height: 1.25;
  outline-offset: -1px;
  outline: 1px solid transparent;
  padding: .526315em .789473em .263157em;
  position: relative;
  text-decoration: none;
`;

Button.defaultProps = {
	children: 'Default prop'
}

export default Button;