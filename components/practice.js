import React from 'react'

import PropTypes from 'prop-types'

const Practice = (props) => {
  return (
    <>
      <div className="practice-practice">
        <div className="practice-heading">
          <h3 className="practice-header">{props.Title}</h3>
          <p className="practice-caption">{props.Description}</p>
        </div>
        <div className="practice-more read-more">
          <span className="practice-text">Read more</span>
          <img
            alt="image"
            src="/Icons/arrow-2.svg"
            className="practice-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .practice-practice {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-header {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .practice-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .practice-more {
            display: none;
          }
          .practice-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .practice-image {
            width: 12px;
            object-fit: cover;
          }
          @media (max-width: 470px) {
            .practice-practice {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-header {
              font-size: 20px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Practice.defaultProps = {
  Title: 'Cardiology',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
}

export default Practice
