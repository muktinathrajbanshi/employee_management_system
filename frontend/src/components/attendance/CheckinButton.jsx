import { useState } from 'react'

const CheckInButton = ({todayRecord, onAction}) => {
    const [loading, setLoading] = useState(false)

    const handleAttendance = async () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onAction()
        }, 1000)
    }

    if(todayRecord?.checkOut) {
        return (
            <div>
                <h3>Work Day Completed</h3>
                <p>Great job! See you tomorrow</p>
            </div>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default CheckInButton
