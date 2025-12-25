export const handleDisplay = ({ id, state, f }) => {
    state === "bar" ? f("cross") : f("bar");
    state === "bar" ? id.classList.replace("closed", "open") : id.classList.replace("open", "closed");
}