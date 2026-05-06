import { LockIcon, X } from "lucide-react"
import { useState } from "react"

const ChangePasswordModal = ({open, onClose}) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({type: "", text: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if(!open) return null;

  return (
    <div onClick={onClose} 
    className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>

        <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md
        animate-fade-in">
            <div className="flex items-center justify-between p-6 pb-0">
                <h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-slate-400" />Chance Password
                </h2>
                 <button
                 onClick={onClose} 
                 className="p-2 rounded-lg hover:bg-slate-100
                 transition-colors text-slate-400 hover:text-slate-600">
                 <X className="w-5 h-5" />
                 </button>
            </div>
        </div>
    </div>
  )
}

export default ChangePasswordModal
