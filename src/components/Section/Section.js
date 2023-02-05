import React from 'react';
import PropTypes from 'prop-types';
import SectionStyles from './SectionStyles';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <h1>{title}</h1>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
