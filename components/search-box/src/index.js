// https://govuk-static.herokuapp.com/component-guide/search

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { LIGHT_BLUE, GREY_2, WHITE, YELLOW } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

import { Search } from '@govuk-react/icons';
import { withWhiteSpace } from '@govuk-react/hoc';

const SearchBoxWrapper = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  background: WHITE,
});

// css normalize is hiding the input:search clear SearchButton
const InputSearchBox = styled('input')({
  width: '100%',
  height: '40px',
  padding: '6px',
  margin: 0,
  border: `solid 1px ${GREY_2}`,
  borderRight: 0,
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.75',
  background: WHITE,
  borderRadius: 0,
  WebkitAppearance: 'none',
  ':focus': {
    marginRight: '3px',
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
    ' ~ button': {
      width: '46px',
    },
  },
});

const SearchButton = styled('button')({
  backgroundColor: LIGHT_BLUE,
  border: 0,
  display: 'block',
  color: WHITE,
  position: 'relative',
  padding: '10px',
  width: '45px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '2px 50%',
  textIndent: '-999em',
  overflow: 'hidden',
  ':focus': {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
  },
});

const SearchBox = ({ placeholder, className }) => (
  <SearchBoxWrapper className={className}>
    <InputSearchBox type="search" placeholder={placeholder} />
    <SearchButton title="Search">
      <Search fill={WHITE} />
    </SearchButton>
  </SearchBoxWrapper>
);

SearchBox.defaultProps = {
  placeholder: undefined,
  className: undefined,
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(SearchBox);
