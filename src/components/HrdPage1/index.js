import {Component} from 'react'
import './index.css'
import Navbar from '../Navbar'
import Card1 from '../Card1'
import Card2 from '../Card2'
import Card3 from '../Card3'

const navBarPages = [
  {
    id: 0,
    name: 'page1',
  },
  {
    id: 1,
    name: 'page2',
  },
  {
    id: 2,
    name: 'page3',
  },
]
class HrdPage1 extends Component {
  state = {
    activeBtn: navBarPages[0].name,
  }

  renderPage = () => {
    const {activeBtn} = this.state
    switch (activeBtn) {
      case navBarPages[0].name:
        return <Card1 />
      case navBarPages[1].name:
        return <Card2 />
      case navBarPages[2].name:
        return <Card3 />

      default:
        return null
    }
  }

  changeBtn = activeBtn => {
    this.setState({activeBtn})
  }

  render() {
    const {activeBtn} = this.state
    return (
      <div className="hrd-background">
        <Navbar
          navBarPages={navBarPages}
          changeBtn={this.changeBtn}
          activeBtn={activeBtn}
        />
        <div className="render-card">{this.renderPage()}</div>
      </div>
    )
  }
}
export default HrdPage1
