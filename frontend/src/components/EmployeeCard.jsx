
const EmployeeCard = ({employee, onDelete, onEdit}) => {
  return (
    <div className="group relative card card-holder overflow-hidden">
      <div>
        {/* circle  */}
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-100 to-slate-100
            flex items-center justify-center">
                <span></span>
            </div>
        </div>
      </div>
      <div className="p-5">
        <h3>{employee.firstName} {employee.lastName}</h3>
        <p className="text-xs text-slate-500">{employee.position}</p>
      </div>
    </div>
  )
}

export default EmployeeCard
