import React from 'react'

import PropTypes from 'prop-types'

const Doctor = (props) => {
  return (
    <>
      <div className="doctor-doctor">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="doctor-image"
        />
        <div className="doctor-heading">
          <h2 className="doctor-text">{props.heading}</h2>
          <p className="doctor-text1">{props.text}</p>
        </div>
      </div>
      <style jsx>
        {`
          .doctor-doctor {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 270px;
            align-items: center;
            flex-direction: column;
          }
          .doctor-image {
            width: 270px;
            object-fit: cover;
          }
          .doctor-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .doctor-text {
            width: 100%;
            font-size: 24px;
            max-width: 270px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .doctor-text1 {
            width: 100%;
            font-size: 14px;
            max-width: 240px;
            text-align: center;
            line-height: 21px;
          }
        `}
      </style>
    </>
  )
}

Doctor.defaultProps = {
  heading: 'Dr. Audrey Smith',
  image_src: '/Doctors/doctor-1-300w.png',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Doctor.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Doctor
