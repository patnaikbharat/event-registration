import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {selectedEventStatus} = props

  const returnSuccess = () => (
    <div className="same-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="success-image"
        alt="registered"
      />
      <h1 className="success-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const returnFailure = () => (
    <div className="same-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="failure-image"
        alt="registrations closed"
      />
      <h1 className="success-text">Registrations Are Closed Now!</h1>
      <p className="failure-text">Stay Tuned. We will reopen</p>
    </div>
  )

  const returnProcess = () => (
    <div className="same-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="in-progress-image"
        alt="yet to register"
      />
      <p className="in-progress-text">
        A live performance brings so much to your relationship with dance
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const returnDefault = () => (
    <div className="default-container">
      <p className="default-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (selectedEventStatus) {
    case 'REGISTERED':
      return returnSuccess()
    case 'REGISTRATIONS_CLOSED':
      return returnFailure()
    case 'YET_TO_REGISTER':
      return returnProcess()
    default:
      return returnDefault()
  }
}

export default ActiveEventRegistrationDetails
