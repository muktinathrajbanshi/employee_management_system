import { format } from "date-fns"

const PayslipList = ({payslips, isAdmin}) => {
  return (
     <div className="card overflow-hidden">
         <div className="overflow-x-auto">
           <table className="table-modern">
             <thead>
               <tr>
                {isAdmin && <th>Employee</th>}
                <th>Period</th>
                <th>Basic Salary</th>
                <th>Net Salary</th>
                <th className="text-center">Actions</th>
               </tr>
             </thead>
             <tbody>
               {payslips.length === 0 ? (
                 <tr>
                   <td colSpan={isAdmin ? 5 : 4} 
                   className="text-center py-12 text-slate-400">
                   No payslips found
                   </td>
                 </tr>
               ) : (
                 payslips.map((payslip) => {
                   return (
                     <tr key={payslip._id || payslip.id}>
                     {isAdmin && (
                       <td className="text-slate-900">
                         {payslip.employee?.firstName}
                         {payslip.employee?.firstName}
                       </td>
                     )}

                       <td className="text-slate-500">
                        {format(new Date(payslip.year, payslip.month -1), "MMMM yyyy")}
                       </td>
   
                       <td className="text-xs text-slate-500">
                       
                       </td>
   
                        <td className="max-w-xs truncate text-slate-500" title={leave.reason}>
                        {leave.reason}
                       </td>
   
                       <td>
                        <span className={`badge ${leave.status === "APPROVED" ? 
                        "badge-success" : leave.status === "REJECTED" ? "badge-danger" : "badge-warning"}`}>
                          {leave.status}
                        </span>
                       </td>
                          {isAdmin && (
                        <td>
                          {leave.status === "PENDING" && (
                            <div className="flex justify-center gap-2">
                              <button 
                              onClick={() => handleStatusUpdate(leave._id || leave.id, "APPROVED")}
                              disabled={!!processing}
                              className="p-1.5 rounded-md bg-emerald-50 text-emerald-600
                              hover:bg-emerald-100 transition-colors">
                                {processing === (leave._id || leave.id) ? <Loader2
                                className="w-4 h-4 animate-spin" /> : <Check
                                className="w-4 h-4" />}
                              </button>

                               <button 
                              onClick={() => handleStatusUpdate(leave._id || leave.id, "REJECTED")}
                              disabled={!!processing}
                               className="p-1.5 rounded-md bg-rose-50 text-rose-600
                               hover:bg-rose-100 transition-colors">
                                {processing === (leave._id || leave.id) ? <Loader2
                                className="w-4 h-4 animate-spin" /> : <X
                                className="w-4 h-4" />}
                              </button>
                            </div>
                          )}
                       </td>
                          )}
                     </tr>
                   )
                 })
               )}
             </tbody>
           </table>
         </div>
       </div>
  )
}

export default PayslipList
