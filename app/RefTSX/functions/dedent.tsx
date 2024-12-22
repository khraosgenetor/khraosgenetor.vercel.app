export default function dedent(code: string): string {
    const lines = code.split("\n");
    const minIndent = Math.min(
        ...lines.filter((line) => line.trim()).map((line) => line.match(/^(\s*)/)?.[1]?.length || 0)
    );
    return lines.map((line) => line.slice(minIndent)).join("\n").trim();
}
