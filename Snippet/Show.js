export const handleDisplay = ({ id, state, f }) => {
    state === "bar" ? f("cross") : f("bar");
    state === "bar" ? id.classList.replace("hidden", "visible") : id.classList.replace("visible", "hidden");
}