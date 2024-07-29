import Email from '@emailjs/browser'
import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_EMAILJS_PUBLICKEY, VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE } = getEnvVariables()

const service = VITE_EMAILJS_SERVICE
const template = VITE_EMAILJS_TEMPLATE

Email.init({
    publicKey: VITE_EMAILJS_PUBLICKEY
})

export const useEmail = () => {

    const sendEmail = async (name, email, asunto, message) => {
        console.log("Sending email...")
        const test = false
        if (test) {
            setTimeout(() => {
                return "Ok"
            }, 5000)
        }
        const emailParams = {
            name, email, asunto, message
        }

        const res = await Email.send(service, template, emailParams).then((res) => {
            return res
        })
        if (res.status === 200) return "Ok"
        else return "Error"
    }

    return { sendEmail }

}