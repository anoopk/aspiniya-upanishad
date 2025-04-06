import React, { useEffect, useState } from "react";
import LinkList from "./components/LinkList";
import { parseReadme } from "./utils/parseReadme";
import "./styles/App.css";

const App: React.FC = () => {
    const [links, setLinks] = useState<string[]>([]);

    useEffect(() => {
        // Fetch the raw README.md content from GitHub
        const readmeUrl = "https://raw.githubusercontent.com/anoopk/aspiniya-upanishad/main/README.md";

        fetch(readmeUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then((markdown) => {
                const extractedLinks = parseReadme(markdown);
                setLinks(extractedLinks.map((link) => link));
            })
            .catch((error) => console.error("Error fetching README.md:", error));
    }, []);

    return (
        <div className="App">
            <h1>listen</h1>
            <LinkList links={links} />
        </div>
    );
};

export default App;
