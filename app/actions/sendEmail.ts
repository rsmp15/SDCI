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
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #ff8c00; border-bottom: 2px solid #ff8c00; padding-bottom: 10px;">New Admission Application</h2>
                    
                    <p>Hello SDCI Team,</p>
                    
                    <p>A new student has submitted an admission application through the website. Here are the detailed details:</p>
                    
                    <p style="background: #fdf5e6; padding: 15px; border-left: 4px solid #ff8c00; font-size: 1.1em;">
                        Student <strong>"${fullName}"</strong> has submitted an application and <strong>wants to join the ${course}</strong> program. 
                    </p>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Phone Number</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Email ID</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Date of Birth</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${dob} (${gender})</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Father's Name</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${fatherName}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Location</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${city}, ${state}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Current Class</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${currentClass}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Academic Marks</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">10th: ${marks10th}%, 12th: ${marks12th || 'N/A'}%</td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px;">
                        <strong>Additional Message from Student:</strong><br>
                        ${message || 'No additional message provided.'}
                    </div>

                    <p style="margin-top: 30px; font-size: 0.9em; color: #666;">
                        This email was generated automatically from the SDCI Website Admission Form.
                    </p>
                </div>
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
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2e7d32; border-bottom: 2px solid #2e7d32; padding-bottom: 10px;">New Counselling Lead</h2>
                    
                    <p>Hello SDCI Team,</p>
                    
                    <p style="background: #e8f5e9; padding: 15px; border-left: 4px solid #2e7d32; font-size: 1.1em;">
                        Student <strong>"${name}"</strong> (Mobile: ${mobile}) is currently in Class <strong>${currentClass}</strong> and <strong>wants to apply for the ${targetExam}</strong> exam.
                    </p>

                    <p>Please follow up with the student as soon as possible to provide further counselling and admission details.</p>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Name</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Mobile</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${mobile}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Current Class</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${currentClass}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #eee;"><strong>Target Exam</strong></td>
                            <td style="padding: 10px; border: 1px solid #eee;">${targetExam}</td>
                        </tr>
                    </table>

                    <p style="margin-top: 30px; font-size: 0.9em; color: #666;">
                        This lead was captured from the SDCI Website Home Page Enquiry Form.
                    </p>
                </div>
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
