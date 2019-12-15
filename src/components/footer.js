import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import CodeIcon from '../assets/code.svg';
import SocialIcons from './social-icons';
import { socialIconList } from './social-icons-list';
import { flexCenter } from './_shared/styled-mixins';

const marginMediaQuery = css`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const StyledFooter = styled.footer`
  ${flexCenter};
  flex-direction: column;
  background-color: var(--bg-content-color);
  padding: calc((var(--space) / 2));
  text-align: center;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
const StyledSocialContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 1rem;
  ${marginMediaQuery};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const StyledCopyright = styled.span`
  font-weight: 500;
  margin-top: 0.5rem;
  ${marginMediaQuery};
`;
const StyledRotator = styled.div`
  ${flexCenter};
  margin-top: 1rem;
  font-size: 1rem;
  ${marginMediaQuery};

  & > svg {
    fill: currentColor;
    margin-right: 0.5rem;
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <SocialIcons icons={socialIconList} />
        <StyledCopyright>
          © {new Date().getFullYear()} {author}
        </StyledCopyright>
      </StyledSocialContainer>
      <StyledRotator>
        <CodeIcon />
        <span>
          with{' '}
          <span role="img" aria-label="heart emoji">
            💖
          </span>
        </span>
      </StyledRotator>
    </StyledFooter>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
