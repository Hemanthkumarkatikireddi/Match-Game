import './index.css'

const TabItem = props => {
  const {tabs, changeItems, classB} = props
  const {tabId, displayText} = tabs
  const changeItem = () => {
    changeItems(tabId)
  }
  const buttonClass = classB ? 'tabs-button' : 'btn-OFF'
  return (
    <li>
      <button onClick={changeItem} className={buttonClass} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
