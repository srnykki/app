import { toast } from "react-toastify";

function Main() {
    const notify = () => toast.error("Ola");

    return (
        <>
            <h1>Main</h1>
            <button onClick={notify}>
                Aperte
            </button>
            </>
    )
}

export default Main;