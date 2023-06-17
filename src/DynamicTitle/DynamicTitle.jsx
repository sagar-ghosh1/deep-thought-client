import { useEffect } from "react";

const DynamicTitle = (title) => {
    useEffect(() => {
        document.title = `Deep Thought || ${title}`
    }, [title])
};

export default DynamicTitle;