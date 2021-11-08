import './index.css'
import {Component} from 'react'

import {GrView} from 'react-icons/gr'
import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'

class Card1 extends Component {
  state = {
    usersData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      email: eachItem.email,
      role: eachItem.role,
    }))

    this.setState({usersData: formattedData})
  }

  render() {
    const {usersData} = this.state

    return (
      <div className="card">
        <tr className="sl-row">
          <td className="s-no">1</td>
          <td className="s-no">name</td>
          <td className="s-no">email</td>
          <td className="s-no">role</td>
          <td className="s-no"></td>
        </tr>
        <ul className="ul-list">
          {usersData.map(each => (
            <li key={each.id}>
              <tr className="sl-row">
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.email}</td>
                <td>{each.role}</td>
                <td>
                  <div>
                    <button type="button" className="view-btn">
                      <GrView />
                    </button>
                    <button type="button" className="view-btn">
                      <FiEdit2 />
                    </button>
                    <button type="button" className="view-btn">
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Card1
