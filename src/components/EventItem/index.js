import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const applyStyle = isActive ? 'event-image-with-border' : 'event-image'

  const onClickingEvent = () => {
    onClickEvent(id)
  }

  return (
    <li className="event-item">
      <button className="list-button" type="button" onClick={onClickingEvent}>
        <img src={imageUrl} className={applyStyle} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
