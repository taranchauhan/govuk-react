// https://github.com/alphagov/govuk-frontend/tree/master/src/components/file-upload

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';
import { withWhiteSpace } from '@govuk-react/hoc';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  NTA_LIGHT,
  MEDIA_QUERIES,
} from '@govuk-react/constants';

const StyledInput = styled('input')({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    width: '50%',
  },
  width: '100%',
  padding: '5px 4px 4px',
});

const FileUpload = ({
  meta, children, hint, acceptedFormats, className,
}) => (
  <Label className={className} error={meta.error}>
    <LabelText error={meta.error}>{children}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    <StyledInput type="file" accept={acceptedFormats} error={meta.error} />
  </Label>
);

FileUpload.defaultProps = {
  hint: undefined,
  meta: {},
  acceptedFormats: undefined,
  className: undefined,
};

FileUpload.propTypes = {
  hint: PropTypes.string,
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  acceptedFormats: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 6 })(FileUpload);
