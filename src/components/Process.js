import React from 'react'
import PropTypes from 'prop-types'

const Process = ({ data }) => (
  <div className="columns">
    {data.map(step => (
      <div>
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {step.description}
          </h4>
        </section>
      </div>
    ))}
  </div>
)

Process.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string
    })
  ),
}

export default Process
