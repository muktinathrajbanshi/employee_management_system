
const EmployeeCard = ({employee, onDelete, onEdit}) => {
  return (
    <div className="group relative card card-holder overflow-hidden">
      <div></div>
      <div>
        <h3>{employee.firstName} {employee.lastName}</h3>
      </div>
    </div>
  )
}

export default EmployeeCard
