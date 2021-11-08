import './index.css'
import {Component} from 'react'
import {IoMdSettings} from 'react-icons/io'

class Navbar extends Component {
  renderNavItems = () => {
    const {navBarPages, activeBtn, changeBtn} = this.props
    console.log(activeBtn)
    return navBarPages.map(each => {
      const btnClassName = activeBtn === each.name ? 'btn-select' : ''
      const onClickPage = () => changeBtn(each.name)

      return (
        <li key={each.id}>
          <button
            type="button"
            className={`page-btn ${btnClassName}`}
            onClick={onClickPage}
          >
            {each.name}
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="navbar-bg">
        <div>
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636350767/HRD_Icon_ptdia7.png"
            alt="logo"
            className="hrd-logo"
          />
        </div>
        <ul className="btn-container">{this.renderNavItems()}</ul>
        <div>
          <IoMdSettings className="setting-icon" />
        </div>
      </div>
    )
  }
}

export default Navbar
