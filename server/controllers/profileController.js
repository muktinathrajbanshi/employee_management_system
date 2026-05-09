import Employee from "../models/Employee.js";

// Get profile
// GET /api/profile
export const getProfile = async (req, res) => {
    try {
        const session = req.session;
        const employee = await Employee.findOne({userId: session.userId})

        if(!employee) {
            // Authenticated user is not an employee - return admin profile
            return res.json({
                firstName: "Admin",
                lastName: "",
                email: session.email,
            })
        }
        return res.json(employee)
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch profile" });
    }
}

// Update profile
// PUT /api/profile

export const updateProfile = async (req, res) => {
    
}