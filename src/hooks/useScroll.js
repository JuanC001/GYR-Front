
export const useScroll = () => {

    const scrollTo = (section) => {

        const target = document.getElementById(section);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })

    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return {
        scrollTo,
        scrollToTop
    }
}
