"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendApplicationEmail(formData: any) {
    try {
        const { fullName, email, phone, dob, gender, fatherName, city, state, currentClass, marks10th, marks12th, course, message } = formData

        const { data, error } = await resend.emails.send({
            from: "SDCI Admission <onboarding@resend.dev>",
            to: ["sdcicareer@gmail.com"],
            subject: `New Admission Application: ${fullName}`,
            html: `
                <h2>New Admission Application Received</h2>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Father's Name:</strong> ${fatherName}</p>
                <p><strong>Location:</strong> ${city}, ${state}</p>
                <p><strong>Current Class:</strong> ${currentClass}</p>
                <p><strong>Academic Marks:</strong> 10th: ${marks10th}%, 12th: ${marks12th || 'N/A'}%</p>
                <p><strong>Interested Course:</strong> ${course}</p>
                <p><strong>Additional Message:</strong> ${message || 'None'}</p>
            `,
        })

        if (error) {
            console.error("Resend Error:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error("Server Action Error:", err)
        return { success: false, error: err.message }
    }
}

export async function sendLeadEmail(formData: any) {
    try {
        const { name, mobile, currentClass, targetExam } = formData

        const { data, error } = await resend.emails.send({
            from: "SDCI Lead <onboarding@resend.dev>",
            to: ["sdcicareer@gmail.com"],
            subject: `New Counselling Lead: ${name}`,
            html: `
                <h2>New Counselling Lead Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Current Class:</strong> ${currentClass}</p>
                <p><strong>Target Exam:</strong> ${targetExam}</p>
            `,
        })

        if (error) {
            console.error("Resend Error:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error("Server Action Error:", err)
        return { success: false, error: err.message }
    }
}
