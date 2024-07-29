export const getEnvVariables = () => {

    return {

        VITE_EMAILJS_SERVICE: import.meta.env.VITE_EMAILJS_SERVICE,
        VITE_EMAILJS_TEMPLATE: import.meta.env.VITE_EMAILJS_TEMPLATE,
        VITE_EMAILJS_PUBLICKEY: import.meta.env.VITE_EMAILJS_PUBLICKEY

    }


}