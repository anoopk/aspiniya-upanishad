export function parseReadme(readmeContent: string): string[] {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links: string[] = [];
    let match;

    while ((match = linkRegex.exec(readmeContent)) !== null) {
        links.push(match[2]); // Push the URL part of the link
    }

    return links;
}