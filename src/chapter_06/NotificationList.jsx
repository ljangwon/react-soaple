import React, { Component } from 'react';
import Notification from './Notification';

const resevedNotifications = [
  {
    id: 1,
    message: "오늘의 일정을 알려드립니다."
  },
  {
    id: 2,
    message: "점심 시간입니다."
  },
  {
    id: 3,
    message: "곧 미팅이 시작됩니다."
  }
]

var timer;

class NotificationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    const { notifications } = this.state
    timer = setInterval(() => {
      if (notifications.length < resevedNotifications.length) {
        const index = notifications.length
        notifications.push(resevedNotifications[index])
        this.setState({
          notifications: notifications
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
  render() {
    return (
      <div>
        {this.state.notifications.map(notification => {
          return <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message} />
        })}
      </div>
    );
  }
}

export default NotificationList;