// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-item' : 'button'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
